import React from 'react';
import { motion } from 'framer-motion';
const Button = ({ filterItem, setItem, menuItems, data }) => {
    return (
        <>
            <div className="d-flex justify-content-center">
                {menuItems.map((Val, id) => {
                    return (
                        <>
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
                        </>
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
