import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const fetchTodoList = async()=>{
    const response = await axiosInstance.get('/todos');
    const data = response.data;
    return data;
}

export const fetchUserList = async()=>{
    const response = await axiosInstance.get('/users');
    const data = response.data;
    return data;
}

export const fetchCommentList = async(postId)=>{
    const response = await axiosInstance.get('/comments', {params: {postId}});
    const data = response.data;
    console.log(data);
    return data;
}

