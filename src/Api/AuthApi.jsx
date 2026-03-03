import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

//GET METHOD
export const GetData = () => {
    return api.get("/posts");
}

//DELETE METHOD 
export const DeleteDataMethod = (id) => {
    return api.delete(`/posts/${id}`)
}

//POST METHOD
export const AddData = (data)=>{
    return api.post("/posts",data)
}

//UPDATE METHOD
export const UpdateData = (id,data) =>{
    return api.put(`/posts/${id}`,data)

}