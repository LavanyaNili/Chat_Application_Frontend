import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App =() => (
    <Router>
        {/* the starting page URL, user will be greeted with the Join prompt */}
        <Route path ="/" exact component={Join} />
        <Route path ="/chat" exact component={Chat} />

    </Router>
);

export default App;