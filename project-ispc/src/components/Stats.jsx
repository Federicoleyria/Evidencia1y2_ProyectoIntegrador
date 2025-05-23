function Stats(props) {
    return(
         <div className="bg-gray-100 p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Estadísticas</h2>
            <p className="mb-1">Productos totales: <strong>{props.total}</strong></p>
            <p className="mb-1">Precio máximo: <strong>${props.max}</strong></p>
            <p>Precio mínimo: <strong>${props.min}</strong></p>
            <p>Precio acumulado: <strong>${props.sum}</strong></p>
            <p>Precio promedio: <strong>${props.prom}</strong></p>
        </div>
    );
}

export default Stats