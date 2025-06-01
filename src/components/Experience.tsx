import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRightIcon, ExternalLinkIcon } from 'lucide-react';
import { DATA } from '@/data/resume';
import { Link } from 'react-router-dom';

export default function Experience() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const toggleItem = (index: number) => {
        setOpenItems((prev) => {
            const newSet = new Set(prev);
            newSet.has(index) ? newSet.delete(index) : newSet.add(index);
            return newSet;
        });
    };

    return (
        <section className="flex flex-col justify-center gap-4 py-6 w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 ">
            <Tabs defaultValue="education" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="education" className="cursor-pointer">
                        Education
                    </TabsTrigger>
                    <TabsTrigger value="work" className="cursor-pointer">
                        Work
                    </TabsTrigger>
                </TabsList>

                {/* EDUCATION */}
                <TabsContent value="education">
                    <Card>
                        <CardContent className="space-y-4 p-4 sm:p-6">
                            {DATA.education.map((edu, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
                                >
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage
                                            src={edu.logoUrl}
                                            alt={edu.school}
                                        />
                                    </Avatar>
                                    <div className="flex flex-col sm:flex-row w-full items-start sm:items-center">
                                        <div>
                                            <CardTitle className="text-base flex items-center">
                                                <Link
                                                    to={edu.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex group"
                                                >
                                                    <span className="group-hover:underline underline">
                                                        {edu.school}
                                                    </span>
                                                    <ExternalLinkIcon className="ml-1 size-4 opacity-60 group-hover:opacity-100 transition duration-200" />
                                                </Link>
                                            </CardTitle>
                                            <CardDescription className="text-sm">
                                                {edu.degree}
                                            </CardDescription>
                                        </div>
                                        <div className="text-sm font-medium sm:ml-auto sm:text-right mt-1 sm:mt-0 text-muted-foreground">
                                            {edu.start} – {edu.end}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* WORK */}
                <TabsContent value="work">
                    <Card>
                        <CardContent className="space-y-4 p-4 sm:p-6">
                            {DATA.work.map((work, i) => {
                                const isOpen = openItems.has(i);
                                return (
                                    <div key={i}>
                                        <div
                                            onClick={() => toggleItem(i)}
                                            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full cursor-pointer group"
                                        >
                                            <Avatar className="w-10 h-10">
                                                <AvatarImage
                                                    src={work.logoUrl}
                                                    alt={work.company}
                                                />
                                            </Avatar>
                                            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center">
                                                <div>
                                                    <CardTitle className="text-base flex items-center">
                                                        {work.company}
                                                        <ChevronRightIcon
                                                            className={`ml-1 size-5 transform transition-transform duration-300 ${
                                                                isOpen
                                                                    ? 'rotate-90'
                                                                    : ''
                                                            }`}
                                                        />
                                                    </CardTitle>
                                                    <CardDescription className="text-sm">
                                                        {work.title}
                                                    </CardDescription>
                                                </div>
                                                <div className="text-sm font-medium sm:ml-auto sm:text-right mt-1 sm:mt-0 text-muted-foreground">
                                                    {work.start} – {work.end}
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                isOpen
                                                    ? 'max-h-[200px] opacity-100 mt-2'
                                                    : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className="pl-4 sm:pl-12 pr-2 text-sm text-foreground">
                                                {work.description}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
    );
}
