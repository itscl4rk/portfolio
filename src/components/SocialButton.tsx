import { DATA } from '@/data/resume';

const SocialButton = () => {
    const socials = Object.entries(DATA.contact.social);
    return (
        <div className="flex justify-center">
            {socials.map(([, social], index) => (
                <div key={index}>
                    {social.active && (
                        <a href={social.url}>
                            <button className="mx-2 cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-400 h-10 relative group overflow-hidden rounded-full p-2 transition-transform duration-500 hover:scale-105 hover:-rotate-12">
                                {social.icon && (
                                    <social.icon className="w-6 h-6 text-zinc-400" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
                            </button>
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SocialButton;
