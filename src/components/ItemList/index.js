import React from "react";
import Item from "../Item";

const ItemList = ({ data = [] }) => {
	return data.map((productos) => <Item key={productos.id} info={productos} />);
};

export default ItemList;
