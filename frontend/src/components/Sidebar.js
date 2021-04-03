import React from 'react';
import { NavLink as NavLinkRRD } from 'react-router-dom';

import {
  Navbar,
  NavItem,
  NavLink,
  Nav,
  DropdownItem,
} from 'reactstrap';


export default function Sidebar(props) {

  const createLinks = (routes) => routes.map((prop, key) => (
	<NavItem className="sidebarLi" key={key}>
		<NavLink
			to={prop.path}
			tag={NavLinkRRD}
		>
			{prop.name}
		</NavLink>
	</NavItem>
  ));

  const { routes } = props;


  return (
		<div className="stayLeft">
			<Navbar
				className="sidebar navbar-vertical fixed-left navbar-light bg-white"
				expand="md"
			>
						{/* Dinamic Navigation */}
						<Nav navbar vertical className="sidebarUl ">{createLinks(routes)}</Nav>
			</Navbar>
		</div>
	);
}
