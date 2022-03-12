import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DMChat from '../Components/Organisms/DMChat/DMChat'
import DMJoin from '../Components/Organisms/DMJoin/DMJoin'

function DM() {
  return (
    <Router>
    <Route path='/chat/join' component={DMJoin} />
    <Route path='/chat/room' component={DMChat} />
  </Router>
  );
}

export default DM;
