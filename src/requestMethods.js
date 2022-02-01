import axios from 'axios';

const BASE_URL ="https://myssticoshopping.herokuapp.com/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjM3MjU2ZTU3YjM0NjE4NDAyMmY4NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzYzMzQ4NSwiZXhwIjoxNjQzODkyNjg1fQ.at-Ib6js2upOBW92wEA_W0WoPW2mKfYChrcbVn7cpgE";

 export const publicRequest = axios.create({
   baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`bearer ${TOKEN}`}
 })
