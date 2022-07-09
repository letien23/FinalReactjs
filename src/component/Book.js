import React from 'react';
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import http from '../../http';
// import './AddCar.css';
// import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
const Book=()=> {
//   const navigate = useNavigate();
//   const [inputs,setInputs] = useState({});
//   const handleChange = (event) => {
//       const image = event.target.image;
//       const value = event.target.value;
//       setInputs(values => ({...values,[image]:value}))
//   }

//   const submitForm = () =>{
//     console.log("Vô rồi nè");
//       http.post('/cars',inputs).then((res)=>{
//           navigate('/');
//       })
//   }
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                  <h4 className="mb-3">Book tickets</h4>
                  <hr className="my-2" />
                    <div className="my-3 d-flex">
                    <div className="form-check ml-0 mt-3">
                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                        <label className="form-check-label" htmlFor="credit">Credit card</label>
                    </div>
                    <div className="form-check m-3">
                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                        <label className="form-check-label" htmlFor="debit">Debit card</label>
                    </div>
                    <div className="form-check m-3">
                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                        <label className="form-check-label" htmlFor="paypal">PayPal</label>
                    </div>
                    </div>
                    <div className="row gy-3">
                    <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">Phone numbers</label>
                        <input type="number" className="form-control" id="cc-name" placeholder="+(84) 982934861" required />
                        <small className="text-muted">Number as displayed on SIM card</small>
                        <div className="invalid-feedback">
                        Name on card is required
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">Email</label>
                        <input type="email" className="form-control" id="cc-number" placeholder="ex@gmail.com" required />
                        <div className="invalid-feedback">
                        Credit card number is required
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="cc-expiration" className="form-label">Tickets</label>
                        {/* 
                                <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                                <div class="invalid-feedback">
                                    Expiration date required
                                </div> */}
                        <select className="form-select" aria-label=".form-select-lg example">
                        <option selected>Passenger</option>
                        <option value={1}>1 passengers</option>
                        <option value={2}>2 passengerss</option>
                        <option value={3}>3 passengerss</option>
                        <option value={1}>4 passengerss</option>
                        <option value={2}>5 passengerss</option>
                        <option value={3}>6 passengers</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="cc-cvv" className="form-label">Promo code</label>
                        <input type="number" className="form-control" id="cc-cvv" placeholder required />
                        <div className="invalid-feedback">
                        Security code required
                        </div>
                    </div>  
                    <div className="col-md-6">
                        <label htmlFor="cc-cvv" className="form-label">Node</label>
                        <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div>
                    </div>
                  </div>
                  <hr className="m-3" />
                  <form className="row align-items-center justify-content-center my-2 me-2">
                    <div>
                    <div className="text-end"> 
                      <button type="button" className="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                      <button type="button" 
                    //   onClick={submitForm} 
                      className="btn btn-primary">Book</button>
                    </div>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
        );
}

export default Book;