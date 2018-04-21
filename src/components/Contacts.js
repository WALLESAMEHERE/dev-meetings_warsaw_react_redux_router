import React, { Component } from 'react';
import List from "./List";

class Contact extends Component { 



  render() {

    const{contacts} = this.props;
 
    return (
        <section>
          {contacts.map(contact =>
          <List key={contact.id}
                name={contact.name}
                age={contact.age}
                job={contact.job} />
            )}
        </section>
    )
  }
}

export default Contact;