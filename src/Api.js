import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001"


class JoblyAPI {
    static async request(endpoint, paramsOrData = {}, verb= "get") {
        paramsOrData._token = JSON.parse(localStorage.getItem('token')).token;

        console.debug("API Call:", endpoint, paramsOrData, verb);
    
    try {
        return (await axios({
          method: verb,
          url: `${BASE_URL}/${endpoint}`,
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
      try{
        let res = await this.request(`companies/${handle}`);
        return res.company;
      }
      catch(e) {
        return e
      }
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
      try {
        let res = await this.request('login', {username: loginData.username, password: loginData.password}, "post");
        return res.token;
      }
      catch(e) {
        return e
      }

    }

    static async signup(signupData) {
      try {
        let res = await this.request('users', signupData, "post");
        return res.token
      }
      catch(e) {
          return e
        }
      
    }

    static async getUserData(username) {
      let res = await this.request(`users/${username}`);
      return res.user
    }

    static async updateUser(username, userData) {
      try {
        let res = await this.request(`users/${username}`, userData, "patch");
        return res.user
      }
      catch(e){
        return e
      }
    }

    static async apply(jobId, username) {
      try {
        let res = await this.request(`jobs/${jobId}/apply`, {username}, "post");
        return res.message
      }
      catch(e){
        return e
      }
    }
    
  }

export default JoblyAPI;