import '../App.css';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Leftside from './Leftside';

function Change() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className='fond'>
            <div className="milieu">
                <Leftside />
                <div className='connex'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h4>Changer mot de passe</h4>
                        <NavLink to='/form' className='retour'>Retour</NavLink>
                        <div className="form-group log">
                            <span id="cin"><i className="fa fa-id-card"></i></span>
                            <input id="cin" type="text" placeholder="CIN" {...register('cin', { required: true, minlength: 12 })} />
                            {errors.name && <p>CIN est obligatoire</p>}
                        </div>
                        <div className="form-group log">
                            <span id="phone"><i className="fa fa-phone"></i></span>
                            <input id="phone" type="text" placeholder="Téléphone" {...register('phone')} />
                        </div>
                        <select className="statut">
                            <option value="selected">Statut</option>
                            <option value="adminrh">ADMIN-RH</option>
                            <option value="adminsi">ADMIN-SI</option>
                            <option value="sg">SG</option>
                            <option value="dir">DIR</option>
                            <option value="shd">SHD</option>
                            <option value="agent">AGENT</option>
                        </select>
                        <div className="form-group log">
                            <span id="matricule">123</span>
                            <input id="matricule" type="text" placeholder="Matricule" {...register('matricule')} />
                        </div>
                        <button type='submit'>Envoyer</button>
                        <NavLink to='/agent' className='connecter'>Se connecter</NavLink>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Change;