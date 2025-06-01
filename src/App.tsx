import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import RootLayout from '@/layout/layout';
import NotFound from '@/pages/NotFound';
import Contact from '@/pages/Contact';
import Project from '@/pages/Project';
import Projects from '@/pages/Projects';
import About from '@/pages/About';

export default function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects/:id" element={<Project />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
