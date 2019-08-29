import React, { Component } from "react";
import axios from "axios";

import config from '../../config.json';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class SuggestedPolices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
        listPolices:[],
        policyDetails:[]
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
      axios.get('').then((response)=> {
        resolve(response);
      console.log(response);
      this.setState({ modal: !this.state.modal, modalData: response.data });
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
    return new Promise((resolve, reject) => {
      axios.get('').then((response)=> {
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
    return (
      <div>
        <div >
                        <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.listPolices.map((item,i)=>{
                        return(
                            <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button className="btn btn-outline-primary" onClick={()=>this.handlePolicyDetails(item)} data-toggle="modal">DETAILS</button></td>
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
          <ModalHeader toggle={this.toggle}>POLICY DETAILS</ModalHeader>
          <ModalBody>
            <div>
              {this.state.policyDetails.map((item1,j)=>{
                  return(
                      <div key={j}>
                          <div></div>
                          </div>

                  )
              })}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleBuyPolicy}>
              Ok Buy
            </Button>{" "}
            <Button color="secondary" onClick={this.cancel}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default SuggestedPolices;
