import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative bg-white mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8 mb-16">
            {/* Desktop Section */}
            {!isMobile && (
                <div className="hidden md:block relative rounded-xl overflow-hidden">
                    <video className="object-cover object-center w-full h-[400px] rounded-3xl" autoPlay loop muted controls={false}>
                        <source src="Assets/Videos/Hero_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex flex-col items-left justify-center">
                        <div className="text-white p-8 text-left w-auto">
                            <div className="text-8xl font-extrabold font-['Plus Jakarta Sans']">
                                CONCEPTO-23
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Section */}
            {isMobile && (
                <div className="md:hidden relative">
                    <div className="relative w-full aspect-w-9 aspect-h-16 overflow-hidden rounded-xl">
                        <div className="video-container">
                            <video className="object-cover object-center w-full h-full rounded-xl" autoPlay loop muted controls={false}>
                                <source src="Assets/Videos/Hero_video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-left justify-center">
                        <div className="text-white p-4 text-left w-auto">
                            <div className="text-xl font-bold font-['Plus Jakarta Sans']">
                                CONCEPTO-23
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
