import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../store/features/eventsSlice';

import {RootState,AppDispatch} from '../store/index'
import { addEvent,removeEvent } from '../store/features/eventsSlice';
export default function EventsPage() {
  const dispatch:AppDispatch = useDispatch();
  const { Events,loading } = useSelector((state:RootState) => state.events);
const[title,setTitle]=useState("");
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
  const [location, setLocation] = useState('');
  useEffect(() => { dispatch(getEvents()); }, [dispatch]);
  const handleEvent = async () => {
        await dispatch(addEvent({title,
    description,
    date,
    location,price:Number(price),
  category}));
  }
  const handleDelete = (id: string) => {
  dispatch(removeEvent(id));
};
  return( <div>   
      <header className="bg-gray-500 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold flex flex-col-reverse items-center">ERP Admin Panel</h1>
      </header> <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">EVENT LIST</h2>
{loading ? (
  <div className="p-8 text-center text-lg font-medium text-gray-700">
    Loading reviews...
  </div>
) :(
      <table className=" table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left ">
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">description</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {Events.map((event, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{event.title}</td>
              <td className="border px-4 py-2">{event.description}</td>
              <td className="border px-4 py-2">{event.location}</td>
              <td className="border px-4 py-2">
                {new Date(event.date).toLocaleDateString()}
              </td>
               <td className="border px-4 py-2">
          <button
            type="button"
            onClick={() => handleDelete(event._id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </td>
            </tr>
          ))}
        </tbody>
      </table>)}
    </div>
  <div className='p-8 flex flex-col   gap-[20px]'>
    <div className='text-xl font-semibold '>ADD EVENTS</div>
    <div className='flex flex-col gap-[20px]'>
    <div  className='flex flex-row  w-full gap-[20px]'>
  <input placeholder="Title" onChange={e => setTitle(e.target.value)}  className="w-[50%] border b  order-gray-300 p-2 rounded h-[53px]"/>
  <input placeholder="Description" onChange={e => setDescription(e.target.value)}  className="w-[50%] border border-gray-300 p-2 rounded h-[53px]" />
  <input type="date" placeholder="Date" onChange={e => setDate(e.target.value)}  className="w-[50%] border border-gray-300 p-2 rounded h-[53px]"/>
  <input placeholder="Location" onChange={e => setLocation(e.target.value)}  className="w-[50%] border border-gray-300 p-2 rounded h-[53px]"/>
  <input placeholder="Price" onChange={e => setPrice(e.target.value)}  className="w-[50%] border border-gray-300 p-2 rounded h-[53px]"/>
  <input placeholder="Category" onChange={e => setCategory(e.target.value)}  className="w-[50%] border border-gray-300 p-2 rounded h-[53px]"/>
  </div>
  
 <div className=''><button type="button" onClick={handleEvent} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 font-bold">Add Event</button></div> </div>
 </div></div>
);} 