import axios from 'axios';
import { StatsState } from '../store/features/dashboardSlice';
const API=axios.create({baseURL:process.env.NEXT_PUBLIC_API_BASE})
export const fetchStats = async ():Promise<StatsState> => (await API.get('/stats')).data;
