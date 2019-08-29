import React ,{Component} from 'react';
import './App.css';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import ListOfPolicies from './components/ListOfPolices/ListOfPolicies';
import SuggestedPolicies from './components/ListOfPolices/SuggestedPolices';
import BuyPolicy from './components/BuyPolicy/BuyPolicy';


class App extends Component{
  render(){

    return (
      <div className="App">
      <HashRouter>
        <Header/>
        <Route path="/listOfPolicies" component={ListOfPolicies}/>
        <Route path="/buyPolicy" component={BuyPolicy}/>
        <Route path="/suggestedPolicies" component={SuggestedPolicies}/>
      </HashRouter>
      </div>
    );

  }
 
}

export default App;
