import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ info }) => {
	return (
		<Link to={`/detalle/${info.id}`} className="product">
			<h1><p className="titulo">{info.title}</p></h1> 
			
			<div>
			<img src={info.image} alt="" className="item"/></div>


		</Link>
	);
};

export default Item;
