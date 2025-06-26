import axios from 'axios';
export interface Login {
  email:string;
  password:string;
 role: string;
  token: string;
}
export interface CreateLoginPayload {
  email:string;
  password:string;
 
}
const API=axios.create({baseURL:process.env.NEXT_PUBLIC_API_BASE})

export const fetchLogin = async (data: CreateLoginPayload): Promise<Login> => (await API.post('/login', data)).data;