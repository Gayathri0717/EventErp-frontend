import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews,removeReview } from '../store/features/reviewsSlice';

import { RootState, AppDispatch } from '../store/index';
export default function ReviewsPage() {
  const dispatch: AppDispatch = useDispatch();
  const { reviews,loading } = useSelector((state: RootState) => state.reviews);

  useEffect(() => { dispatch(getReviews()); }, [dispatch]);
  const handleDelete = (id: string) => {
  dispatch(removeReview(id));
};
  return (
    <div>
        <header className="bg-gray-500 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold flex flex-col-reverse items-center">ERP Admin Panel</h1>
      </header>
  
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">REVIEW LIST</h2>
{loading ? (
  <div className="p-8 text-center text-lg font-medium text-gray-700">
    Loading reviews...
  </div>
) :(
      <table className=" table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left ">
             <th className="border px-4 py-2">Event</th>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Rating</th>
            <th className="border px-4 py-2">Comment</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{review.EventName}</td>
              <td className="border px-4 py-2">{review.user}</td>
              <td className="border px-4 py-2">{review.rating}</td>
              <td className="border px-4 py-2">{review.comment}</td>
      
              <td className="border px-4 py-2">
                <button
                  type="button"
                  onClick={() => handleDelete(review._id)} 
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
