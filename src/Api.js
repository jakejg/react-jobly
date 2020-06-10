import axios from "axios";

class JoblyAPI {
    static async request(endpoint, paramsOrData = {}, verb= "get") {
        paramsOrData._token = ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impha2V0ZXN0IiwiaWF0IjoxNTkxODA5MDc0fQ.1OziTWWrYePIcHh8ve1piv4unrNTFodHTFwk_0RMCtk");

        console.debug("API Call:", endpoint, paramsOrData, verb);
    
    try {
        return (await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }
  
      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
  
    static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    }

    static async getCompanies() {
        let res = await this.request('companies');
        return res.companies;
      }

    static async getJobs() {
        let res = await this.request('jobs');
        return res.job;
      }
  }

export default JoblyAPI;