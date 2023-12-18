import React from "react";
import { Nav } from "reactstrap";
import { AuthenticatedRoutes } from "../../Contexts/Routes";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const icon = ['bx bx-home bx-sm', 'bx bx-search bx-sm', 'bx bx-file bx-sm', 'bx bx-list-check bx-sm', 'bx bx-archive-in bx-sm', 'bx bx-trash bx-sm'];

export default function Navbar() {
    return (
        <div>
            <div>
                <div>
                    <span>
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                        style={{ borderRadius: "50%", width: "64px", height: "64px" }}
                    />
                    </span>
                    <span>
                   
                        <b>John Doe</b>
                    
                        johndoe@gmail.com
                    
                    </span>
                </div>

                {AuthenticatedRoutes.children.map((route, index) => (
                    <Nav pills vertical >
                        <NavLink key={`${route.name}-${index}`} to={route.path} className="btn nav-link gap-3"  >
                            <i class={icon[index]}></i>&nbsp; &nbsp;
                            {route.name}
                        </NavLink>
                    </Nav>
                ))}
            </div>
        </div>
    )
}
