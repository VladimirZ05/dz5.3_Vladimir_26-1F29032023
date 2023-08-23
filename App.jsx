import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users" exact component={UserList} />
        <Route path="/users/:userId" component={UserDetail} />
      </Switch>
    </Router>
  );
}

export default App;
