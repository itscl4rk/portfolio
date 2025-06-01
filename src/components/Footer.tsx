import { motion } from 'framer-motion';
import SocialButton from '@/components/SocialButton';
import { blurFade } from './ui/animations';

const Footer = () => {
    return (
        <motion.footer
            variants={blurFade(0.4)}
            initial="initial"
            animate="animate"
            className="mt-12 pb-6 pt-4 text-center"
        >
            <div className="flex justify-center gap-4 mb-2">
                <SocialButton />
            </div>
            <p className="text-xs text-gray-500 font-inter">
                &copy; {new Date().getFullYear()} Clark Walrath. All rights
                reserved.
            </p>
        </motion.footer>
    );
};

export default Footer;
