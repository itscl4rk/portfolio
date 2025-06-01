import { Link, useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { DATA } from '@/data/resume';
import { Icons } from './ui/icons';

const GameCard = () => {
    const navigate = useNavigate();
    const projects = DATA.games;
    return (
        <>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="rounded-lg shadow-md overflow-hidden border border-zinc-500/20 bg-zinc-900 w-full flex flex-col"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover cursor-pointer"
                        onClick={() => navigate(project.link)}
                    />
                    <div className="p-4 flex-grow">
                        <div className="flex items-center justify-between">
                            <h2 className="text-left text-lg font-semibold text-zinc-100">
                                {project.title}
                            </h2>
                            <Link to={project.link}>
                                <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 relative group overflow-hidden bg-transparent text-gray-50 rounded-full hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105">
                                    <span className="font-inter">Discover</span>
                                    <ArrowRightIcon
                                        size={18}
                                        className="ml-2"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
                                </button>
                            </Link>
                        </div>
                        <p className="text-left text-zinc-400 mt-1">
                            {project.description}
                        </p>
                    </div>
                    <div className="p-4 flex flex-wrap gap-2">
                        {project.itch && (
                            <a
                                href={project.itch}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-zinc-100 hover:bg-zinc-400 text-zinc-900 px-2 py-1 rounded-md flex items-center gap-2 cursor-pointer duration-300 transition-all">
                                    <Icons.itch className="w-5 h-5" />
                                    <span>Play</span>
                                </button>
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default GameCard;
