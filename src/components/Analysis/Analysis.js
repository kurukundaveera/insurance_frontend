import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import config from '../../config.json';

import axios from 'axios';

export default class DailyAnalysis extends PureComponent {
    constructor() {
        super()
        this.state  = {
            overallAnalysis : [],
            topTenAnalysis:[]


        }
    }
    componentDidMount() {
     
        this.getAnalysis().then(response => {
            console.log(response.data)
          this.setState({ overallAnalysis: response.data });
        });   
        this.getTopTenAnalysis().then(response => {
            console.log(response.data)
          this.setState({ topTenAnalysis: response.data });
        });   
    
      }
    getAnalysis = () => {
       
            return new Promise((resolve, reject) => {
          axios.get(config.url+'/trending').then((response)=> {
            resolve(response);
          console.log(response);
          }).catch((error)=> {
            reject(error);
          });
        });
      }
      getTopTenAnalysis = () => {
       
        return new Promise((resolve, reject) => {
      axios.get(config.url+'/topTrending').then((response)=> {
        resolve(response);
      console.log(response);
      }).catch((error)=> {
        reject(error);
      });
    });
  }
  
 
  render() {
    return (
        <div ><h1>TRENDING ANALYSIS </h1>
        
      <div align="center">
          <h3>OVERALL ANALYSIS</h3>
      <BarChart
        width={700}
        height={300}
        data={this.state.overallAnalysis}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="policyName"  />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#010D3E" />
        <Bar dataKey="percentage"  fill="#010D3E" />
      </BarChart>
      </div>
      <div align="center">
          <h3>TOP TEN ANALYSIS</h3>
      <BarChart
        width={700}
        height={300}
        data={this.state.topTenAnalysis}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="policyName"  />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#010D3E" />
        <Bar dataKey="percentage"  fill="#010D3E" />
      </BarChart>
      </div>
      </div>
    );
  }
}