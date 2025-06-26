import axios from 'axios';
export interface User {
    _id: string;
    name: string;
    email: string;
    role: 'admin' | 'user'; // or string if not fixed
}
export interface UpdateUserPayload{
    id:string;
    data:Partial<Omit<User,'_id'>>;
}
const API=axios.create({baseURL:process.env.NEXT_PUBLIC_API_BASE})
export const fetchUsers = async ():Promise<User[]> => (await API.get('/users')).data;
export const updateUser = async ({ id, data }:UpdateUserPayload):Promise<User> => (await API.put(`/users/${id}`, data)).data;
export const deleteUser = async (id: string): Promise<string> => {
  await API.delete(`/users/${id}`);
  return id; 
};
