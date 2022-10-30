import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import swal from 'sweetalert';
import './item.css'


const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	const order = {
		buyer: {
			name: "Marcos",
			email: "Marcosfeijoo97@gmail.com	",
			phone: "1126394818",
			address: "marcooos",
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order)
		.then(({ id }) => swal('gracias por su compra, su codigo de compra es',id));
	};

	if (cart.length === 0) {
		return (
			<>
				<p>No hay elementos en el carrito</p>
				<Link to="/">Hacer compras</Link>
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<div className="total">
			<p>total: ${totalPrice()}</p></div>
			<div className="total2">
			<button onClick={handleClick}>Emitir compra</button></div>
		</>
	);
};

export default Cart;
