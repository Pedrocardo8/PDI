import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Pages/Dashboard';
import Expenses from './components/Pages/Expenses';
import Budget from './components/Pages/Budget';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/expenses' component={Expenses} />
          <Route path='/budget' component={Budget} />
        </Switch>
      </Router>
         
    </div>
  );
}

export default App;
