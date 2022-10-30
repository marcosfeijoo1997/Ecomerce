import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ info }) => {
	return (
		<Link to={`/detalle/${info.id}`} className="product">
			<h1><p className="titulo">{info.title}</p></h1> 


			<img src={info.image} alt="" className="item"/>
		</Link>
	);
};

export default Item;
