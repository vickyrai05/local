import axios from 'axios';

const Api_URL='http://localhost:3002/users';

export const  addUser= async(data)=>{
    try{
       return await axios.post(Api_URL,data);
    }catch(error){
        console.log('error while calling adduser api',error.message);
    }
   
}

export const  getUsers = async()=>{
    try{
       return await axios.get(Api_URL);
    }catch(error){
        console.log('error while calling adduser api',error.message);
    }
   
}
export const  getUser = async(data)=>{
    try{
       return await axios.get(`${Api_URL}/${data}`);
    }catch(error){
        console.log('error while calling adduser getUser api',error.message);
    }
   
}
export const  editUser = async(data,id)=>{
    try{
        return await axios.put(`${Api_URL}/${id}`,data);
     }catch(error){
         console.log('error while calling adduser editUser api',error.message);
     }

}
export const deleteUser =async(id)=>{
        try{
            return await axios.delete(`${Api_URL}/${id}`);
         }catch(error){
             console.log('error while calling adduser editUser api',error.message);
         }
   
}
