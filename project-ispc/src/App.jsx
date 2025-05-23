import axios from "axios";
import { useEffect, useState } from "react";

import Stats from "./components/Stats";
import Productos from "./components/Productos";

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
    const sumProduct = filteredProducts.reduce((total, p) => total + p.price, 0);
    const avgProduct = filteredProducts.length > 0 ? sumProduct / filteredProducts.length : 0;

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

        <Productos products={filteredProducts}/>
        

        <button
        onClick={() => setShow(!show)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
        {show ? "Ocultar estadísticas" : "Mostrar estadísticas"}
        </button>

        {show && ( <Stats total={totalProducts} max={maxProduct} min={minProduct} sum={sumProduct.toFixed(2)} prom={avgProduct.toFixed(2)}/>
        )}
    </div>
    );
}

export default App;