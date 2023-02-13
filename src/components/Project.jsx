import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';
const Project = (props) => {
    const [data, setData] = useState([]);
    const [item, setItem] = useState(data);

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
                const response = await fetch(
                    'https://projectlinkapi.up.railway.app/api',
                    {
                        method: 'GET',
                    }
                );

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);

    return (
        <div>
            <Button
                data={data}
                filterItem={filterItem}
                setItem={setItem}
                menuItems={menuItems}
            />
            <Card data={item} color={props.color} />
        </div>
    );
};

export default Project;
