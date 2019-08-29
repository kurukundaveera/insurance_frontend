import React ,{Component} from 'react';
import './App.css';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import ListOfPolicies from './components/ListOfPolicies/ListOfPolicies';
import SuggestedPolicies from './components/ListOfPolicies/SuggestedPolicies';
import BuyPolicy from './components/BuyPolicy/BuyPolicy';
import Analysis from './components/Analysis/Analysis';


class App extends Component{
  render(){

    return (
      <div className="App">
      <HashRouter>
        <Header/>
        <Route path="/listOfPolicies" component={ListOfPolicies}/>
        <Route path="/buyPolicy" component={BuyPolicy}/>
        <Route path="/suggestedPolicies" component={SuggestedPolicies}/>
        <Route path="/analysis" component={Analysis}/>
      </HashRouter>
      </div>
    );

  }
 
}

export default App;
