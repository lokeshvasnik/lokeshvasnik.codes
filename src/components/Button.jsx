import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const Button = ({ filterItem, setItem, menuItems, data }) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    // The heading animation
    const [fullText, setFullText] = useState(
        `HERE ARE SOME PROJECTS MADE BY ME FEEL FREE TO CHECK IT OUT`
    );
    // Heading animation logic
    useEffect(() => {
        if (index < fullText.length) {
            const timeoutId = setTimeout(() => {
                setText(text + fullText[index]);
                setIndex(index + 1);
            }, 100);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [index]);

    return (
        <>
            <div className="container py-5">
                <div className="row text-center text-white">
                    <div className="col-lg-8 mx-auto">
                        <p className="bg-dark lead mb-0">{text}</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                {menuItems.map((Val, id) => {
                    return (
                        <motion.a
                            className="box"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 17,
                            }}
                            onClick={() => filterItem(Val)}
                            key={id}
                        >
                            {Val}
                        </motion.a>
                    );
                })}
                <motion.a
                    className="box"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                    }}
                    onClick={() => setItem(data)}
                >
                    All
                </motion.a>
            </div>
        </>
    );
};

export default Button;
{
    /* <button onClick={() => setItem(data)}>
All
</button> */
}
