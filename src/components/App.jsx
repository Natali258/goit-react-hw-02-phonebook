import React from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChangeInput = e => {
    if (e.target.name === 'name') {
      this.setState({ name: e.target.value });
    }
    if (e.target.name === 'number') {
      this.setState({ number: e.target.value });
    }
  };

  addContact = () => {
    this.state.contacts.some(({ name }) => name === this.state.name)
      ? alert(`${this.state.name} is already in contacts`)
      : this.setState({
          contacts: [
            ...this.state.contacts,
            {
              id: nanoid(),
              name: this.state.name,
              number: this.state.number,
            },
          ],
          name: '',
          number: '',
        });
  };
  deleteContact = userId => {
    console.log(userId);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== userId),
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilterValue = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  render() {
    const username = this.handleChangeInput;
    const addContact = this.addContact;
    const deleteContact = this.deleteContact;
    const saveFilter = this.changeFilter;
    const filterValue = this.getFilterValue();
    return (
      <div>
        <Section title="Phonebook">
          <Phonebook
            username={username}
            name={this.state.name}
            number={this.state.number}
            contacts={addContact}
          />
        </Section>
        <Section title="Contacts">
          <Contacts
            contacts={filterValue}
            deleteContact={deleteContact}
            saveFilter={saveFilter}
          />
        </Section>
      </div>
    );
  }
}
