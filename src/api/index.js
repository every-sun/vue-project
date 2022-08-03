import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const fetchTodoList = async()=>{
    const response = await axiosInstance.get('/todos');
    const data = response.data;
    return data;
}

