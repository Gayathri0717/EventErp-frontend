import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, removeUser } from '../store/features/userSlice';
import {RootState,AppDispatch} from '../store/index'


export default function UsersPage() {
  const dispatch:AppDispatch = useDispatch();
  const { users,loading } = useSelector((state:RootState) => state.users);
  const handleDelete = (id: string) => {
  dispatch(removeUser(id));
};
  useEffect(() => { dispatch(getUsers()); }, [dispatch]);
 return(   <div>
    <header className="bg-gray-500 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold flex flex-col-reverse items-center">ERP Admin Panel</h1>
      </header>
 <div className="p-8">
      
      <h2 className="text-xl font-semibold mb-4">USER LIST</h2>
{loading ? (
  <div className="p-8 text-center text-lg font-medium text-gray-700">
    Loading Users...
  </div>
) :(
      <table className=" table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left ">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email id</th>
          
              <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
             
              
          <button
            type="button"
            onClick={() => handleDelete(user._id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 m-[8px]"
          >
            Delete
          </button>
 
            </tr>
          ))}
        </tbody>
      </table>)}
    </div> </div>);
}