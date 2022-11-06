import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
import './navBar.css'
import Logo from "./logo";

const NavBar = () => {
	return (
		<ul className="Navegador">
	<li><Logo/></li> 
				<div className="nav__brand">
				
					
				<li>
					<NavLink className="nav__link" to="/">
						Nuestros productos
					</NavLink>
					</li>
				</div>
				<div className="nav__brand">
					<li>
						<NavLink className="nav__link" to="/categoria/pantalones">
							Pantalones
						</NavLink>
					</li>
					</div>
					<div className="nav__brand">
					<li>

						<NavLink className="nav__link" to="/categoria/remeras">
							Remeras
						</NavLink>
					</li>
					</div>
					<li>
						<NavLink className="nav__link" to="cart">
							<CartWidget />
						</NavLink>
					</li>
				
			
		
			</ul>
	);
};

export default NavBar;
