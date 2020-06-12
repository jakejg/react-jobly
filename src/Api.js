import axios from "axios";

class JoblyAPI {
    static async request(endpoint, paramsOrData = {}, verb= "get") {
        paramsOrData._token = localStorage.getItem('token');

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

    static async getCompanies(search) {
        let res = await this.request('companies', {search});
        return res.companies;
      }

    static async getJobs(search) {
        let res = await this.request('jobs', {search});
        return res.jobs;
      }
    
    static async login(loginData) {
      let res = await this.request('login', {username: loginData.username, password: loginData.password}, "post");
      return res.token;
    }

    static async signup(signupData) {
      let res = await this.request('users', signupData, "post");
      return res.token;
    }

    static async getUserData(username) {
      let res = await this.request(`users/${username}`);
      return res.user
    }
    
  }

export default JoblyAPI;