import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import DocMenu from './components/DocMenu/DocMenu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import DocDropdown from './components/api/Dropdown/doc/DocDropdown';
import DocCheckbox from './components/api/Checkbox/doc/DocCheckbox';
import DocToggleButton from './components/api/ToggleButton/doc/DocToggleButton';
import DocTabSelector from './components/api/TabSelector/doc/DocTabSelector';
import DocListView from './components/api/ListView/doc/DocListView';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <Header/>
          <div className="doc-content">
            <DocMenu/>
            <Route exact path="/" component={Home} />
            <Route path="/doc/Checkbox" component={DocCheckbox}/>
            <Route path="/doc/Dropdown" component={DocDropdown}/>
            <Route path="/doc/ToggleButton" component={DocToggleButton}/>
            <Route path="/doc/TabSelector" component={DocTabSelector}/>
            <Route path="/doc/ListView" component={DocListView}/>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
