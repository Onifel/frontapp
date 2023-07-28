import '../App.css';
import { NavLink } from 'react-router-dom';

function Change() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center fond'>
        <div className=" d-flex milieu">
            <div className='techno'></div>
            <div className='d-flex flex-column justify-content-center align-items-center connex'>
                <form action="">    
                    <h4 className="text-secondary">Changer mot de passe</h4>
                    <NavLink to='/home' className='mb-3 retour'>Retour</NavLink>
                    <div className="input-group input-group-sm mb-3 log">
                        <span className="input-group-text border-0" id="cin"><i class="fa fa-id-card"></i></span>
                        <div class="form-floating">
                            <input className="form-control border-0 w-50" id="cin" type="text" placeholder="CIN"/>
                            <label for="cin">CIN</label>
                        </div>
                        
                    </div>
                    <div className="input-group input-group-sm mb-3 log">
                        <span className="input-group-text border-0" id="phone"><i class="fa fa-phone"></i></span>
                        <div class="form-floating">
                            <input className="form-control border-0 w-50" id="phone" type="text" placeholder="Téléphone"/>
                            <label for="phone">Téléphone</label>
                        </div>
                        
                    </div>
                    <select className="form-select mb-3 border-0 w-50 statut">
                        <option value="selected">Statut</option>
                        <option value="adminrh">ADMIN-RH</option>
                        <option value="adminsi">ADMIN-SI</option>
                        <option value="sg">SG</option>
                        <option value="dir">DIR</option>
                        <option value="shd">SHD</option>
                        <option value="agent">AGENT</option>
                    </select>
                    <div className="input-group input-group-sm mb-3 log">
                        <span className="input-group-text border-0" id="matricule">123</span>
                        <div class="form-floating">
                            <input className="form-control border-0 w-50" id="matricule" type="text" placeholder="Matricule"/>
                            <label for="matricule">Matricule</label>
                        </div>
                        
                    </div>
                    <div className='mb-3 button'>
                        <NavLink to='' className='btn rounded-pill text-light'>Envoyer</NavLink>
                    </div>
                    <div className='mt-5'>
                        <NavLink to='/agent'className='connecter'>Se connecter</NavLink>
                    </div>
                    
                </form>
            </div>        
        </div>
    </div>
  );
}

export default Change;