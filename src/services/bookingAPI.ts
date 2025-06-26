import axios from 'axios';
export interface Booking {
_id:string,
  title: string,
  date: string,
  location: string,
  description: string,
  price:number,
  category:string,
  quantity:number,
  userEmail:string,
  userName:string
}
const API=axios.create({baseURL:process.env.NEXT_PUBLIC_API_BASE})
export const fetchBookings = async ():Promise<Booking[]> => (await API.get('/booking')).data;
export const deleteBookings = async (id:string):Promise<{message:string}> => (await API.delete(`/booking/${id}`)).data;