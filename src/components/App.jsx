import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+38(050)459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+79(123)443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '+41(321)645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '+38(096)227-91-26' },
    ],
    filter: '',
  };

  createPhoneBookEntry = data => {
    const normalizedData = data.name.toLowerCase();
    const { contacts } = this.state;
    if (contacts.some(({ name }) => name.toLowerCase() === normalizedData)) {
      Notify.failure("Such a contact already exists!");
      return 
    };

    const newPhoneBookEntry = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newPhoneBookEntry],
    }));
  };

  deletePhoneBookEntry = entryId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== entryId),
    }));
  };

  handleSearchByName = ({ target: { value } }) => {
    this.searchContactByName(value);
  };

  searchContactByName = contactName => {
    this.setState({ filter: contactName });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div style={{ padding: '20px' }}>
        <h1>Phonebook</h1>
        <ContactForm createPhoneBookEntry={this.createPhoneBookEntry} />
        <h2>Contacts</h2>
        {this.state.contacts.length ? (
          <>
            <Filter onChange={this.handleSearchByName} />
            <ContactList
              contacts={filteredContacts}
              deletePhoneBookEntry={this.deletePhoneBookEntry}
            />
          </>
        ) : (
          <p>There are no contacts!</p>
        )}
      </div>
    );
  }
}
