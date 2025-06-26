import axios from 'axios';
export interface Event {
  _id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
  price:number;
  category:string;
}

export interface CreateEventPayload {
  title: string;
  date: string;
  location: string;
  description?: string;
  price:number;
  category:string;
}
const API = axios.create({baseURL:process.env.NEXT_PUBLIC_API_BASE})
export const fetchEvents = async ():Promise<Event[]>     => (await API.get('/events')).data;
export const createEvent = async (data: CreateEventPayload): Promise<Event> => (await API.post('/events', data)).data;
export const deleteEvent = async (id: string): Promise<string> => {
  await API.delete(`/events/${id}`);
  return id; 
};

