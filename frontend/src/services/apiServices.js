import axios from "axios";
import { API_BASE_URL } from "../config/todo/todoConfig";

class ApiService{
    
    async get(endpoint){
        try{
            const response = await axios.get(`${API_BASE_URL}${endpoint}`);
            return response.data;
        }
        catch(error){
            throw new Error(`Error fetching data from ${endpoint}`);
        }
    }

    async post(endpoint, data){
        try{
            const response = await axios.get(`${API_BASE_URL}${endpoint}`, data);
            return response.data;
        }
        catch(error){
            throw new Error(`Error posting data to ${endpoint}`);
        }
    }

    async put(endpoint, data){
        try{
            const response = await axios.get(`${API_BASE_URL}${endpoint}`, data);
            return response.data;
        }
        catch(error){
            throw new Error(`Error updated data at ${endpoint}`);
        }
    }

    async delete(endpoint){
        try{
            const response = await axios.get(`${API_BASE_URL}${endpoint}`);
            return {message:"Deleted successfully"};
        }
        catch(error){
            throw new Error(`Error deleting data from ${endpoint}`);
        }
    }
}

export default new ApiService();