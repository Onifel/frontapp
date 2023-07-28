import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../public/logo-mndpt.jpg';

const Form = () => {
    return (
        <div className='d-flex flex-column align-items-center connex'>
            <img src={logo} className='my-3 logo' alt='logo' />
            <h4 className="welcome">Bienvenu</h4>
            <form action="">
                <div className="input-group input-group-sm mb-3 log">
                    <span className="input-group-text border-0" id="user"><i class="fa fa-user"></i></span>
                    <div class="form-floating">
                        <input className="form-control input-sm border-0 w-50" id="login" type="text" placeholder="Login" />
                        <label for="login">Login</label>
                    </div>
                </div>
                <div className="input-group input-group-sm mb-3 pwd">
                    <span className="input-group-text border-0" id="lock"><i class="fa fa-lock"></i></span>
                    <div class="form-floating">
                        <input className="form-control input-sm border-0 w-50" id="mdp" type="password" placeholder="Mot de passe" />
                        <label for="mdp">Mot de passe</label>
                    </div>
                </div>
                <div className='mt-3 buttons'>
                    <NavLink to='/agent' className=' btn text-light'>Se connecter</NavLink>
                </div>
                <div className='row mt-3 checkb'>
                    <div className='col-6 mt-5 custom-control custom-checkbox cnt'>
                        <label className='custom-control-label text-light-dark chb' for='check'> {" "}
                            <input className='custom-control-input' type="checkbox" name="" id="check" />Restez connecté
                        </label>
                    </div>
                    <div className='col-6 mt-3'>
                        <NavLink to='/change' className='changer'>Mot de passe oublié?</NavLink>
                    </div>
                </div>
            </form>
        </div >
    );
}

export default Form;