import React,{Component} from 'react';
import './BuyPolicy.css';
import axios from 'axios';
import config from '../../config.json';

class BuyPolicy extends Component{
    constructor(props){
        super(props);
        this.state={
            policyName:localStorage.getItem("policyName"),
            policyMinAge:localStorage.getItem("policyMinAge"),
            policyMaxAge:localStorage.getItem("policyMaxAge"),
            buyPolicy:{
                policyId:localStorage.getItem("policyId"),
                policyHolderName:'',
                gender:'',
                birthDate:'',
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
    axios.post(config.url+'/buy',buyPolicy).then((response)=>{
        console.log(response);
        alert(response.data.message)
        this.props.history.push('/analysis');
    }).catch((error)=>{
        console.log(error.response.data.message);
        alert(error.response.data.message)
    });

}
    render(){
        return(
            <div>
                <h3>{this.state.policyName}      Min  age:{this.state.policyMinAge}  max age:{this.state.policyMaxAge}</h3>
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
                                <label for="age">DATE OF BIRTH:</label>
                             </div>
                            <div className="col-75">
                                <input type="date" id="birthDate" name="birthDate" placeholder="please enter the date of birth.." onChange={this.handleChange}/>
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
                                    <option value="mother">MOTHER</option>
                                    <option value="father">FATHER</option>
                                    <option value="daughter">DAUGHTER</option>
                                    <option value="son">SON</option>
                                    <option value="wife">WIFE</option>
                                    <option value="husband">HUSBAND</option>
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