import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Budget from './pages/Budget';
import Goals from './pages/Goals';

function App() {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact render={() => <Dashboard /> } />
          <Route path='/expenses'  render={() => <Expenses /> } />
          <Route path='/goals'  render={() => <Goals /> } />
          <Route path='/budget' render={() => <Budget /> } />
          <Route path="*" render={() => <Dashboard /> } />
        </Switch>
      </Router>
         
    </div>
  );
}

export default App;
