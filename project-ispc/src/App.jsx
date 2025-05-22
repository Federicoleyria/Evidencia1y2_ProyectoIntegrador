import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(true);

    useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=100").then((res) => {
            setProducts(res.data.products);
        });
    }, []);

    
    const filteredProducts = products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

    {
        
    }
    const totalProducts = filteredProducts.length;
    {
        
    }
    const maxProduct = Math.max(...filteredProducts.map((p) => p.price));
    const minProduct = Math.min(...filteredProducts.map((p) => p.price));

return (
    <div className="w-1/2 mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Productos con Axios</h1>

        <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 mt-4">No se encontraron productos</div>
        ) : (
        <ul className="space-y-2 mb-6">
            {filteredProducts.map((p) => (
            <li
                key={p.id}
                className="p-4 border rounded shadow-sm flex justify-between items-center hover:bg-gray-50"
            >
                <span className="font-medium">{p.title}</span>
                <span className="text-green-600 font-semibold">${p.price}</span>
            </li>
            ))}
        </ul>
        )}

        <button
        onClick={() => setShow(!show)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
        {show ? "Ocultar estadísticas" : "Mostrar estadísticas"}
        </button>

        {show && (
        <div className="bg-gray-100 p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Estadísticas</h2>
            <p className="mb-1">Productos totales: <strong>{totalProducts}</strong></p>
            <p className="mb-1">Precio máximo: <strong>${maxProduct}</strong></p>
            <p>Precio mínimo: <strong>${minProduct}</strong></p>
        </div>
        )}
    </div>
    );
}

export default App;