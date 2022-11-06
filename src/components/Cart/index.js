import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState} from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import swal from 'sweetalert';
import ItemCart from '../ItemCart/index'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const order = {
        buyer: {
        name: buyer.name,
        email: buyer.email,
        phone: buyer.phone,
        address: buyer.address,
        },
        items: cart.map((producto) => ({
        id: producto.id,
        title: producto.title,
        price: producto.price,
        quantity: producto.quantity,
        })),
        total: totalPrice(),
    };

    const handleClick = (e) => {
        e.preventDefault()
        
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) =>
        swal(`${buyer.name}. Su compra ${id} ha sido realizada!`)
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setBuyer((state) => ({
        ...state,
        [name]: value,
        }));
    };

    if (cart.length === 0) {
        return (
        <>
            <div className="contenido1">
            <p className="titulo1">No hay elementos en el carrito</p>
            <Link to="/" className="titulo2">
                Realizar compra
            </Link>
            </div>
        </>
        );
    }

    return (
        <>
        {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
        ))}
        <div className="contenido2">
            <p>Total: ${totalPrice()}</p>
            <form>
            <input
                type="text"
                placeholder="Ingrese su nombre"
                name="name"
                value={buyer.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Ingrese su email"
                value={buyer.email}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="phone"
                placeholder="Ingrese su celu"
                value={buyer.phone}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                placeholder="Ingrese su direccion"
                name="address"
                value={buyer.address}
                onChange={handleChange}
                required
            />
            <button onClick={handleClick}>Emitir orden de compra</button>
            </form>
        </div>
        </>
    );
    };


export default Cart;