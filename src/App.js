import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import DocMenu from './components/DocMenu/DocMenu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import DocDropdown from './components/api/Dropdown/doc/DocDropdown';
import DocCheckbox from './components/api/Checkbox/doc/DocCheckbox';

//import Dropdown from './components/api/Dropdown/Dropdown';
//import Checkbox from './components/api/Checkbox/Checkbox';

class App extends Component {

  state = {
    items: [
      {
        id: 1,
        name: 'First Item'
      },
      {
        id: 2,
        name: 'Second Item'
      },
      {
        id: 3,
        name: 'Third Item'
      },
      {
        id: 4,
        name: 'Fourth Item'
      }
    ]
  }

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
          </div>

          {/* <Dropdown items={this.state.items}
                    selectedItem={this.state.items[1]}
                    changed={(item) => alert('Item was changed - ' + item.name)}/>

          <br/><br/><br/>

          <Checkbox changed={(checked) => alert('changed - ' + checked)}
                    checked={true}/> */}

        </div>
      </Router>
    );
  }
}

export default App;
