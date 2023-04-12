import { useState } from "react";
import { motion } from "framer-motion";
import "../Styles/Navbar.css";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 1, y: "-160%" },
    };

    const items = ["Home", "About me", "Skills", "Projects"];

    return (
        <nav>
            <motion.div
                className="logo"
            >
                Logo
            </motion.div>
            <motion.ul
                className={`nav-links ${isOpen ? "open" : "closed"}`}
                variants={variants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                {items.map((item) => (
                    <motion.li
                        className="nav-item"
                        key={item}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a href={`# ${item}`} >{item}</a>
                    </motion.li>
                ))}
            </motion.ul>
            <button className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
};
