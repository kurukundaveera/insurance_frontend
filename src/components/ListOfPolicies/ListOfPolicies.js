import React, { Component } from "react";
import axios from "axios";
import config from '../../config.json';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { withTranslation} from 'react-i18next';

class ListOfPolicies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
        listPolices:[],
        policyDetails:[],
        policyName:localStorage.getItem("policyName"),
    };
  }
  componentDidMount() {
     
    this.getData().then(response => {
        console.log(response.data)
      this.setState({ listPolices: response.data });
    });
   

  }
  getData = () => {

    return new Promise((resolve, reject) => {
      axios.get(config.url+'policies/all').then((response)=> {
        
        resolve(response);
      console.log(response);
      }).catch((error)=> {
        reject(error);
      });
    });
  }
 
 
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
 
  handlePolicyDetails = (item) => {
   this.setState({ modal: !this.state.modal });
   localStorage.setItem("policyId",item.policyId);
   localStorage.setItem("policyName",item.policyName);
   localStorage.setItem("policyMinAge",item.policyMinAge);
   localStorage.setItem("policyMaxAge",item.policyMaxAge)
        console.log(item.policyName);
    return new Promise((resolve, reject) => {
      axios.get(config.url+'policy/'+item.policyId).then((response)=> {
        resolve(response);
      console.log(response);
      this.setState({policyDetails :response.data});
      }).catch((error)=> {
        reject(error);
      });
    });
  }
 
  handleBuyPolicy=()=>{
      this.props.history.push('/buyPolicy');
  }
  render() {
    let { t } = this.props;
    return (
      <div>
        <div >
     
            <h3>{t('list of policies')}</h3>
                        <table class="table table-striped">
                <thead>
                    <tr>
                   
                    <th scope="col">{t('policy name')}</th>
                    <th scope="col">{t('policy minimum age')}</th>
                    <th scope="col">{t('policy maximum age')}</th>
                    <th scope="col">{t('policy amount')}</th>
                    <th scope="col">{t('action')}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.listPolices.map((item,i)=>{
                        return(
                            <tr>
                            <td>{item.policyName}</td>
                            <td> {item.policyMinAge} years</td>
                            <td>{item.policyMaxAge} years</td>
                            <td>{item.policyPrice}</td>
                            <td><button  id="btn1"className="btn btn-outline-primary" onClick={()=>this.handlePolicyDetails(item)} data-toggle="modal">DETAILS</button></td>
                            </tr>

                        )
                    })}
                   
                </tbody>
                </table>
          
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>POLICY DETAILS OF {this.state.policyName}</ModalHeader>
          <ModalBody>
            <div>
              {this.state.policyDetails.map((item1,j)=>{
                  return(
                      <React.Fragment key={j}>
                          <div>
                            <u> POLICY TERM CONDITIONS: </u><br/>
                            <div><b>DESCRIPTION: </b>{item1.policyTermCondition.description}</div>
                            <div> <b>MODES OF PREMIUM: </b>{item1.policyTermCondition.modesOfPremium}</div>
                            <div><b>TAX BENEFIT: </b>{item1.policyTermCondition.taxbenefit}</div>
                            <div><b>POLICY REVIVAL: </b>{item1.policyTermCondition.policyRevival}</div>
                            <div><b>LOAN FACILITY: </b>{item1.policyTermCondition.loneFacility}</div>
                                <hr/>
                            <u> SALIENT FEATURES: </u><br/>
                            <div><b>TAX BENEFIT: </b>{item1.salientFeatures.incomeTaxBenefit}</div>
                            <div> <b>MINIMUM SUM ASSURED: </b>{item1.salientFeatures.minimumSumAssured}</div>
                            <div><b>PAYMENT MODE: </b>{item1.salientFeatures.paymentMode}</div>
                            <div><b>POLICY TERM: </b>{item1.salientFeatures.policyTerm}</div>

                          </div>
                    </React.Fragment>

                  )
              })}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button  id="btn8" color="primary" onClick={this.handleBuyPolicy}>
              Ok Buy
            </Button>{" "}
            <Button  id="btn9"color="secondary" onClick={this.cancel}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default withTranslation() (ListOfPolicies);
