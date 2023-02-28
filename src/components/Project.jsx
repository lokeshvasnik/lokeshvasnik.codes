import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';
const Project = (props) => {
    const [data, setData] = useState([]);
    const [item, setItem] = useState(data);
    const [spinner, setSpinner] = useState(false);
    const menuItems = [...new Set(data.map((Val) => Val.category))];

    const filterItem = (curcat) => {
        const newItem = data.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };

    // Fetching data from backend api
    useEffect(() => {
        const getData = async () => {
            try {
                setSpinner(true);
                const response = await fetch(
                    'https://portfolio-website-acor.onrender.com/api',
                    {
                        method: 'GET',
                    }
                );

                const data = await response.json();
                setData(data);
                setSpinner(false);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, [item]);

    return (
        <>
            <Button
                data={data}
                filterItem={filterItem}
                setItem={setItem}
                menuItems={menuItems}
            />
            <Card data={item} color={props.color} loading={spinner} />
        </>
    );
};

export default Project;
