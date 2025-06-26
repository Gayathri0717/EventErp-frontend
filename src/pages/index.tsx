import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStats } from '../store/features/dashboardSlice';
import StatsCard from '../components/StatsCard';
import { RootState, AppDispatch } from '../store/index';
import { useRouter } from "next/router";
export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const {
    users, reviews, events,Bookings } = useSelector((state: RootState) => state.stats);
    console.log("Stats from Redux:", { users, events, reviews, Bookings });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);
  useEffect(() => { dispatch(getStats()); }, [dispatch]);
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <header className="bg-gray-500 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold flex flex-col-reverse items-center">ERP Admin Panel</h1>
      </header>

      <div className="flex flex-1">

        <aside className="w-64 bg-white border-r p-6">
          <nav className="space-y-6">
            <Link href="/" className="text-xl block text-gray-700 hover:bg-gray-200 p-[11px]">Dashboard</Link>
            <Link href="/users" className=" text-xl block text-gray-700 hover:bg-gray-200  p-[11px]">Manage Users</Link>
            <Link href="/events" className=" text-xl  block text-gray-700 hover:bg-gray-200 p-[11px]">Manage Events</Link>
            <Link href="/reviews" className=" text-xl  block text-gray-700 hover:bg-gray-200 p-[11px]">Manage Reviews</Link>
            <Link href="/bookings" className=" text-xl  block text-gray-700 hover:bg-gray-200 p-[11px]">Manage orders</Link>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <h2 className="text-[25px] font-semibold text-gray-800">Welcome to the Admin Panel</h2>
          <p className="text-gray-600 mt-6">Select a section from the sidebar to manage the content.</p>
          <div className='text-xl mt-8'>DASHBOARD</div>
          <div className="grid grid-cols-3 gap-4 mt-6">

            <StatsCard title="Users" count={users} />
            <StatsCard title="Events" count={events} />
            <StatsCard title="Reviews" count={reviews} />
            <StatsCard title="Bookings" count={Bookings} />
          </div>
        </main>
      </div>
    </div>
  );
}
