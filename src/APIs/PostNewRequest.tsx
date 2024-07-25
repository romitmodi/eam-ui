import axios, { AxiosResponse } from 'axios';

const data = {
    title: 'New Todo',
    completed: false,
  };
  

const postNewReq = async (url: string, body: any) => {
    return axios.post(url, body)
}