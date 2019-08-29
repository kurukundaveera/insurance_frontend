import React ,{Component} from 'react';
import './App.css';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import ListOfPolices from './components/ListOfPolices/ListOfPolices';
import SuggestedPolices from './components/ListOfPolices/SuggestedPolices';
import BuyPolicy from './components/BuyPolicy/BuyPolicy';


class App extends Component{
  render(){

    return (
      <div className="App">
      <HashRouter>
        <Header/>
        <Route path="/listOfPolices" component={ListOfPolices}/>
        <Route path="/buyPolicy" component={BuyPolicy}/>
        <Route path="/suggestedPolices" component={SuggestedPolices}/>
      </HashRouter>
      </div>
    );

  }
 
}

export default App;
