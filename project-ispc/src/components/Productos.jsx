function Productos (props) {
    if ((props.products).length === 0) {
        return <div className="text-center text-gray-500 mt-4">No se encontraron productos</div>;
    }

    return (
        <ul className="space-y-2 mb-6">
            {(props.products).map((p) => (
                <li
                    key={p.id}
                    className="p-4 border-4 rounded border-gray-300 shadow-sm flex justify-between items-center hover:bg-gray-200"
                >
                    <span className="font-medium">{p.title}</span>
                    <span className="text-green-600 font-semibold">${p.price}</span>
                </li>
            ))}
        </ul>
    );
}

export default Productos;