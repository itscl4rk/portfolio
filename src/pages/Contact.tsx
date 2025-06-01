import { Mail } from 'lucide-react';
import { DATA } from '@/data/resume';
import ChangeTitle from '@/lib/ChangeTitle';
// mobile ready

const Contact = () => {
    const { email, social } = DATA.contact;

    const activeSocials = Object.entries(social).filter(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, entry]) => entry.active !== false
    );
    ChangeTitle({ name: `${DATA.name} • Contact` });
    return (
        <section className="w-full flex flex-col items-center justify-center gap-10 px-4 text-zinc-100">
            <h2 className="text-4xl md:text-5xl font-bold text-center font-mono">
                Contact
            </h2>
            <p className="text-center max-w-2xl text-lg md:text-xl text-muted-foreground font-inter">
                Have a question, idea, or just want to say hi? Drop me a
                message!
            </p>

            {/* Active Social Links */}
            <div className="flex flex-wrap justify-center gap-10">
                {activeSocials.map(([key, { handle, url, icon: Icon }]) => (
                    <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                    >
                        {Icon && (
                            <Icon className="size-10 md:size-12 text-muted-foreground group-hover:text-zinc-100 transition" />
                        )}
                        <span className="text-base md:text-lg font-mono mt-2 group-hover:underline">
                            @{handle}
                        </span>
                    </a>
                ))}
            </div>
            {/* Email */}
            <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 mt-4 font-mono text-lg md:text-xl text-zinc-300 hover:text-zinc-100 transition"
            >
                <Mail className="size-7 md:size-8" />
                <span>{email}</span>
            </a>
        </section>
    );
};

export default Contact;
