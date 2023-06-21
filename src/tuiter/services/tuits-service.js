import axios from 'axios';
const API_BASE = process.env.REACT_APP_SERVER_API_URL;
const TUITS_API = `${API_BASE}/tuits`;

//const SERVER = "";
//const BASE_API = `${SERVER}/api`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
   }   

export const findTuits = async () => {
  console.log(TUITS_API);
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
   }
   
   export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
  }
  
  export const updateTuit = async (tuit) => {
    const response = await axios
      .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
  }
  
  

