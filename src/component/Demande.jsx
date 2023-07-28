import React from 'react';
import Navbarpg from './Navbarpg';
import '../page/Page.css';

const Demande = ()=>{
    return(
        <div>
            <>
                <Navbarpg/>
            </>
            <div className='container general'>
                <div className='row'>
                    <form action="" className='col-9'>
                        <div className='row date'>
                            <div className="col-4">
                                <div className='my-5 py-5'>
                                    <label for="dd">Date de début</label>
                                    <input type="date" id="dd" className="form-control "/>
                                </div>
                                <div>
                                    <label for="type">Type d'absence</label>
                                    <input type="date" id="type" className="form-control "/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='my-5 py-5'>
                                    <label for="df">Date de fin</label>
                                    <input type="date" id="df" className="form-control"/>
                                </div>
                                <div>
                                    <label for="lieu">Lieu de jouissance</label>
                                    <select className="form-control"id="lieu">
                                        <option value="tana">Antananarivo</option>
                                        <option value="fianara">Fianarantsoa</option>
                                        <option value="tulear">Toliara</option>
                                        <option value="majunga">Mahajanga</option>
                                        <option value="tamatave">Toamasina</option>
                                        <option value="diego">Antsiranana</option>
                                    </select>
                                </div>     
                            </div>
                            <div className="col-4">
                                    <input type="checkbox" id="demij" className="form-control"/>
                                    <label for="demij" className="mr-1 mb-5" id='demijrn'>0,5 jour</label>
                                <div className='d-inline-block my-5 py-5 demi'>
                                    <label for="mataprem">Demi-journée</label>
                                    <select className="form-control" id="mataprem">
                                        <option value="matin">Matin</option>
                                        <option value="aprem">Après-midi</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="just">Justification</label>
                                    <textarea id="just" className="form-control mb-5"/>
                                </div>       
                            </div>
                        </div>   
                    </form>
                <div className='col-3 vaovao'>

                </div>
            </div>
            </div>
               
        </div>
    );
}

export default Demande;