import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contacts';
import HomePage from './components/Home';
import MainPage from './components/Main';

    const contacts = [
        {
          name:"Mabel",
          job:'ReactJS',
          age:22,
          id:1
        },
                {
          name:"Norma",
          job:'AngularJS',
          age:41,
          id:2
        },
                {
          name:"Ross",
          job:'Bez pracy',
          age:66,
          id:3
        },
                {
          name:"Katt",
          job:'Jquery',
          age:15,
          id:4
        },
                {
          name:"Eliot",
          job:'pure JS',
          age:25,
          id:5
        }

    ]
class App extends Component {

state= {
  displayedContacts:contacts,
  contacts
}

handleSearch = (event) =>{
  const searchQuery = event.target.value.toLowerCase();
  this.setState({
    displayedContacts:this.state.contacts.filter(function(contact) {
    const searchValue = contact.name.toLowerCase();
    return searchValue.indexOf(searchQuery) !== -1;
  })
  })
  

}

  render(){

    return (
      <div>
      <input type="text" id="name" onChange={this.handleSearch}/>
          <Contact contacts={this.state.displayedContacts}/>
      </div>

    );
  }
}

export default App;