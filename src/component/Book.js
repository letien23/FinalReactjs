import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// npm i @emailjs/browser

const Book = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "dthanh1508",
        "form",
        form.current,
        "tIfHYFtNZepcYyxR7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <form ref={form} onSubmit={sendEmail} className="modal-content">
                  <div className="modal-body">
                      <h4 className="mb-3">Book tickets</h4>
                      <hr className="my-2" />
                      <div className="my-3 d-flex">
                          <div className="form-check ml-0 mt-3">
                              <input id="credit" name="ve" type="radio" className="form-check-input" defaultChecked required />
                              <label className="form-check-label">Vé một chiều</label>
                          </div>
                          <div className="form-check m-3">
                              <input id="debit" name="ve" type="radio" className="form-check-input" required />
                              <label className="form-check-label">Vé hai chiều</label>
                          </div>
                          <div className="form-check m-3">
                              <input id="paypal" name="ve" type="radio" className="form-check-input" required />
                              <label className="form-check-label">Vé nhiều nơi</label>
                          </div>
                      </div>
                      <div className="row gy-3 mb-4">
                          <div className="col-md-6">
                              <label htmlFor="cc-name" className="form-label">First name</label>
                              <input type="text" name='fn' className="form-control" id="cc-name" placeholder="" required />
                              <div className="invalid-feedback">
                                  First name not blank!
                              </div>
                          </div>
                          <div className="col-md-6">
                              <label htmlFor="cc-number" className="form-label">Last name</label>
                              <input type="text" name='ln' className="form-control" id="cc-number" placeholder="" required />
                              <div className="invalid-feedback">
                                  Last name not blank!
                              </div>
                          </div>
                      </div>
                      <div className="row gy-3">
                          <div className="col-md-6">
                              <label htmlFor="cc-name" className="form-label">Phone numbers</label>
                              <input type="number" name='sdt' className="form-control" id="cc-name" placeholder="+(84) 982934861" required />
                              <small className="text-muted">Number as displayed on SIM card</small>
                              <div className="invalid-feedback">
                                  Name on card is required
                              </div>
                          </div>
                          <div className="col-md-6">
                              <label htmlFor="cc-number" className="form-label">Email</label>
                              <input type="email" name='email' className="form-control" id="cc-number" placeholder="ex@gmail.com" required />
                              <div className="invalid-feedback">
                                  Credit card number is required
                              </div>
                          </div>
                          <div className="col-md-3">
                              <label htmlFor="cc-expiration" className="form-label">Tickets</label>
                              <select className="form-select" name='select' aria-label=".form-select-lg example">
                                  <option selected>Passenger</option>
                                  <option value={1}>1 passengers</option>
                                  <option value={2}>2 passengerss</option>
                                  <option value={3}>3 passengerss</option>
                                  <option value={4}>4 passengerss</option>
                                  <option value={5}>5 passengerss</option>
                                  <option value={6}>6 passengers</option>
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
                              <textarea className="form-control" name='node' aria-label="With textarea" defaultValue={""} />
                          </div>
                      </div>
                  </div>
                  <hr className="m-3" />
                  <div className="row align-items-center justify-content-center my-2 me-2">
                      <div>
                          <div className="text-end"> 
                              <button type="button" className="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                              <button type="submit"
                              onSubmit={sendEmail}
                              className="btn btn-primary">Book</button>
                              {/* <input type="submit" value="Send" /> */}
                          </div>
                      </div>
                  </div>
                </form>
              </div>
            </div>
          );
}

export default Book;