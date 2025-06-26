import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookings,removeBookings } from '../store/features/bookingSlice';

import { RootState, AppDispatch } from '../store/index';
export default function Bookings() {
  const dispatch: AppDispatch = useDispatch();
  const { bookings,loading } = useSelector((state: RootState) => state.bookings);

  useEffect(() => { dispatch(getBookings()); }, [dispatch]);
  const handleDelete = (id: string) => {
  dispatch(removeBookings(id));
};
  return (
    <div>
        <header className="bg-gray-500 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold flex flex-col-reverse items-center">ERP Admin Panel</h1>
      </header>
  
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">BOOKING LIST</h2>
{loading ? (
  <div className="p-8 text-center text-lg font-medium text-gray-700">
    Loading reviews...
  </div>
) :(
      <table className=" table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left ">
             <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">UserName</th>
                <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((bb, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{bb.title}</td>
              <td className="border px-4 py-2">{bb.location}</td>
              <td className="border px-4 py-2">{bb.description}</td>
              <td className="border px-4 py-2">{bb.price}</td>
        <td className="border px-4 py-2">{bb.category}</td>
          <td className="border px-4 py-2">{bb.quantity}</td>
            <td className="border px-4 py-2">{bb.date}</td>
              <td className="border px-4 py-2">{bb.userName}</td>
              <td className="border px-4 py-2">
                <button
                  type="button"
                  onClick={() => handleDelete(bb._id)} 
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
    </div>);
}
