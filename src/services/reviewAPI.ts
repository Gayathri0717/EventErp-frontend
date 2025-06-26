import axios from 'axios';
export interface Review {
    _id: string;
    eventId: string;
    user: string;
    rating: number; // numeric rating
    comment: string;
    date: string; // or Date if it's a real Date object
    EventName:string;
}
const API=axios.create({baseURL:process.env.NEXT_PUBLIC_API_BASE})
export const fetchReviews = async ():Promise<Review[]> => (await API.get('/reviews')).data;
export const deleteReview = async (id:string):Promise<{message:string}> => (await API.delete(`/reviews/${id}`)).data;