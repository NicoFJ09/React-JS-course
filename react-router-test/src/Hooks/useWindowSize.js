import {useState, useEffect} from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        const cleanup = () => { // Cleanup event listener
            window.removeEventListener('resize', handleResize);
        }

        return cleanup;
    }, []);
    return windowSize;
}

export default useWindowSize;