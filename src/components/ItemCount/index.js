import React, { useEffect, useState } from "react";
import "./itemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="counter">
			<button className="boton" disabled={count <= 1} onClick={decrease}>
				-
			</button>
			<span className="contador">{count}</span>
			<button className="boton" disabled={count >= stock} onClick={increase}>
				+
			</button>
		<br/>
		<br/> 
				<button className="boton2" disabled={stock <= 0} onClick={() => onAdd(count)}>
					Agregar al carrito
				</button>
			
		</div>
	);
};

export default ItemCount;
