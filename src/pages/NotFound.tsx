import { HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom'; // Remove if not using React Router
import ChangeTitle from '@/lib/ChangeTitle';

const NotFound = () => {
    ChangeTitle({ name: 'Clark Walrath • 404' });
    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
            <div className="mb-6">
                <h1 className="text-6xl md:text-8xl font-bold text-gray-50 font-inter">
                    404
                </h1>
                <p className="text-gray-300 text-lg md:text-xl mt-2 font-inter">
                    Oops! The page you're looking for doesn't exist.
                </p>
            </div>

            <Link to="/" className="group relative">
                <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 relative group overflow-hidden bg-transparent text-gray-50 rounded-full hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105">
                    <HomeIcon size={20} className="mr-2" />
                    <span className="font-inter">Home</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
                </button>
            </Link>
        </main>
    );
};

export default NotFound;
