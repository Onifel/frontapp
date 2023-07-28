import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbarpg = ()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="nav-link fs-4 profil" aria-current="page" to="/profil">
                        Mon profil
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <NavLink className="nav-link mr-2 lien" to="/historique">Mes demandes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mr-2 lien" to="/demande">Demande d'absence</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link ml-2 lien" to="/planning">Planning de congé</NavLink>
                            </li>
                        </ul>
                        <div>
                            <NavLink to="/home" className="btn deconnex">
                                <i className="fa fa-sign-out logout"></i> {""}Déconnexion
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbarpg;