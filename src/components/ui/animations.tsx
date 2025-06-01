export const blurFade = (delay = 0) => {
    return {
        initial: {
            opacity: 0,
            y: 20,
            filter: 'blur(8px)',
        },
        animate: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                delay,
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };
};
export const bounceOut = () => {
    return {
        initial: {
            scale: 0,
        },
        animate: {
            scale: [0.05, 1.2, 1], // bounce: up to 1.2, settle at 1
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                times: [0, 0.5, 1], // match the scale keyframes
            },
        },
    };
};
