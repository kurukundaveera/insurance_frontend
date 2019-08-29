import React,{Component} from 'react';
import './BuyPolicy.css';
import axios from 'axios';

class BuyPolicy extends Component{
    constructor(props){
        super(props);
        this.state={
            buyPolicy:{
                policyHolderName:'',
                gender:'',
                age:'',
                mobileNumber:'',
                city:'',
                nomineeName:'',
                relationship:''


            }
        }
    }
    
  handleChange = event => {
    const { buyPolicy } = this.state;
    buyPolicy[event.target.name] = event.target.value;
    this.setState({ buyPolicy });
  };
  
  handleBuy = (e) => {
    e.preventDefault();
    const { buyPolicy } = this.state;    
    axios.post('',buyPolicy).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    });

}
    render(){
        return(
            <div>
                <h3>BUY POLICY</h3>
                <div className="form1">
                <div className="container">
                     <form >
                        <div className="row">
                            <div className="col-25">
                             <label for="policyHolderName">POLICY HOLDER NAME:</label>
                            </div>
                            <div className="col-75 ">
                                <input type="text" id="policyHolderName" name="policyHolderName" placeholder="plese enter the policy holder name..." onChange={this.handleChange}/>
                            </div>
                         </div>
                         <div className="row">
                            <div className="col-25">
                                 <label for="gender">GENDER:</label>
                             </div>
                             <div className="col-75">
                                <select id="gender" name="gender" onChange={this.handleChange}>
                                    <option value="male">MALE</option>
                                    <option value="female">FEMALE</option>
                                 </select>
                             </div>
                        </div>
                       <div className="row">
                            <div className="col-25">
                                <label for="age">AGE:</label>
                             </div>
                            <div className="col-75">
                                <input type="date" id="age" name="age" placeholder="please enter the Age.." onChange={this.handleChange}/>
                            </div>
                     </div>
                     <div className="row">
                            <div className="col-25">
                                <label for="mobileNumber">MOBILE NUMBER:</label>
                             </div>
                            <div className="col-75">
                                <input type="number" id="mobileNumber" name="mobileNumber" placeholder="please enter the mobile number.." onChange={this.handleChange}/>
                            </div>
                     </div>
                     <div className="row">
                            <div className="col-25">
                                <label for="city">CITY:</label>
                             </div>
                            <div className="col-75">
                                <input type="text" id="city" name="city" placeholder="please enter the city.." onChange={this.handleChange}/>
                            </div>
                     </div>
                    
                     <div className="row">
                            <div className="col-25">
                                <label for="nomineeName">NOMINEE NAME:</label>
                             </div>
                            <div className="col-75">
                                <input type="text" id="nomineeName" name="nomineeName" placeholder="please enter the Nominee Name.." onChange={this.handleChange}/>
                            </div>
                     </div>
                     <div className="row">
                            <div className="col-25">
                                 <label for="relationShip">RELATIONSHIP:</label>
                             </div>
                             <div className="col-75">
                                <select id="relationship" name="relationship" onChange={this.handleChange}>
                                    <option value="relationship">MOTHER</option>
                                    <option value="relationship">FATHER</option>
                                    <option value="relationship">DAUGHTER</option>
                                    <option value="relationship">SON</option>
                                    <option value="relationship">WIFE</option>
                                    <option value="relationship">HUSBAND</option>
                                 </select>
                             </div>
                        </div>
                    <div className="row">
                        <button className="btn btn-outline-primary btn3" id="btn3" onClick={this.handleBuy}>BUY</button>
                     </div>
                </form>
            </div>
            </div>
        </div>

        )
    }
}
export default BuyPolicy;