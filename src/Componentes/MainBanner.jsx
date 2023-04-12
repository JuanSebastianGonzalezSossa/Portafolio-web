import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import '../Styles/MainBanner.css';

const text = "Full stack developer";

const Ball = () => {
    return (
        <motion.svg
            animate={{ y: [0, 120, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            width="200"
            height="200"
            viewBox="0 0 200 200"
        >
            <motion.image
                href="basketball-svgrepo-com.svg"
                width="200"
                height="200"
            />

        </motion.svg>
    );
};


export const MainBanner = () => {

    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTypedText((prevTypedText) => {
                if (prevTypedText === text) {
                    return "";
                } else {
                    return text.slice(0, prevTypedText.length + 1);
                }
            });
        }, 200);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="banner" id="home">
            <div className="main">
                <span className="tagline">Welcome to my Portfolio</span>
                <div className="title">
                    <motion.h1
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Hi! I'm Juan {typedText}
                    </motion.h1></div>
            </div>
            <div className="animation-ball">
                <div className="ball">
                    <Ball />
                </div>
            </div>
        </section>
    )
}
