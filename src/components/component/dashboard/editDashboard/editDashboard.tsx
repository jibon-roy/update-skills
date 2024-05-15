import { useState } from 'react';

const EditDashboard = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newItem = {
            id: Date.now(), // simple way to generate an id
            name,
            price: parseFloat(price),
        };

        const response = await fetch('/api/update-menu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        });

        if (response.ok) {
            alert('Menu item added successfully');
            setName('');
            setPrice('');
        } else {
            alert('Failed to add menu item');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="price">
                    Price
                </label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Add Menu Item
            </button>
        </form>
    );
};

export default EditDashboard;
