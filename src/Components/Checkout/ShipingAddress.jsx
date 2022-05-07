import React from 'react';
import { ShipingAdd, INPUT, Button, SELECT} from "../../Styled-components/Style";
import { BsInfoCircleFill,BsCheckCircleFill } from "react-icons/bs";

const ShipingAddress = () => {
  return (
      <ShipingAdd>
          <form action="">
          <div>
                  <p style={{marginBottom:"20px"}}>1. Shiping Address</p>
                  <label htmlFor="country">Country/Region</label>
                  <INPUT type="text" value="United States" disabled  width="96%" required/>
                  <label htmlFor="name">*Full Name</label>
                  <INPUT type="text" placeholder="Enter Full Name" width="96%"  required/>
                  <label htmlFor="Address">Address Search</label>
                  <INPUT type="text" placeholder="start typing your address..." width="96%" required/>
                  <p>or Enter Address Manually</p>
                  <label htmlFor="contact number">Contact Number</label>
                  <INPUT type="text" width="96%"  required/>
                  <p>Why do we need your number?</p>
              </div>
              <div>
                  <p style={{marginBottom:"10px"}}>2. Select Delivery Option</p>
                  <div>
                  <section><BsInfoCircleFill /></section>
                    <h4>Please enter your address so we can calculate your delivery options.</h4>
                  </div>
              </div>
              <div>
                  <p>3. Select Payment Method</p>
                  <div>
                      <h2>
                          <BsCheckCircleFill />
                      </h2>
                      <p>Credit/Debit Card</p>
                      <img width="40px" height="40px" src="https://s1.thcdn.com/checkout/resources/images/5ea52bff4335c6810730e818e701bdf5.svg" alt="" />
                      <img width="40px" height="40px" src="https://s1.thcdn.com/checkout/resources/images/57987be4eb98b4c77644d93d92df80fa.svg" alt="" />
                      <img width="40px" height="40px" src="https://s1.thcdn.com/checkout/resources/images/932e82ef072c7df18e91e66b96dfdf5d.svg" alt="" />
                      <img width="40px" height="40px" src="https://s1.thcdn.com/checkout/resources/images/6732c0137a7dab50b23daf1337fe2f30.svg" alt="" />
                      <img width="40px" height="40px" src="https://s1.thcdn.com/checkout/resources/images/c6b3c4b8eea09a08c22da2cef43e15a5.svg" alt="" />
                      <img width="40px" height="40px" src="https://s1.thcdn.com/checkout/resources/images/8ba3dc816042268141a2205e3bfc3971.svg" alt="" />
                      <img width="40px" height="40px" src="https://s1.thcdn.com/checkout/resources/images/248074ffdeeeaeffed9c5db35f35fe45.svg" alt="" /><br />
                      <label htmlFor="card number">*Card Number</label>
                      <INPUT type="text" width="98%"  required/>
                      <label htmlFor="name on card">*Name on card</label>
                      <INPUT type="text" width="98%"  required/>
                      <label htmlFor="expiry date">*Expiry Date</label><br />
                      <SELECT className="first-select">
                      <option value="">MONTH</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                      </SELECT>
                      <SELECT>
                      <option value="">YEAR</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      </SELECT>
                      <label htmlFor="security code">*Security Code (CV2)</label><br />
                       <INPUT type="text" width="46%" required/>
                  </div>
              </div>
              <div className="button">
              <Button padding="20px 40px" width="95%" fontSize="20px">SUBMIT MY ORDER</Button>
              </div>
          </form>
    </ShipingAdd>
  )
}

export default ShipingAddress;