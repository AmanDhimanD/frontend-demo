import { useState } from 'react';

export function useCRUD() {
    const [data, setData] = useState([]);

    const createItem = (item) => {
        setData((prevData) => [...prevData, item]);
    };

    const readItem = (itemId) => {
        return data.find((item) => item.id === itemId);
    };

    const updateItem = (itemId, updatedItem) => {
        setData((prevData) => {
            return prevData.map((item) =>
                item.id === itemId ? { ...item, ...updatedItem } : item
            );
        });
    };

    const deleteItem = (itemId) => {
        setData((prevData) => {
            return prevData.filter((item) => item.id !== itemId);
        });
    };

    return { data, createItem, readItem, updateItem, deleteItem };
}