import { Component } from 'react';
import PhoneBookForm from './PhonebookForm/PhonebookForm';
import { nanoid } from 'nanoid';

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

  filteredContacts = this.state.contacts;

  createPhoneBookEntry = data => {
    const newPhoneBookEntry = {
      ...data,
      id: nanoid(),
    };

    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, newPhoneBookEntry],
      }),
      () => {
        console.log('Updated contacts:', this.state.contacts); // Вывод состояния после обновления
      }
    );
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
      <PhoneBookForm
        contacts={filteredContacts}
        filter={filter}
        createPhoneBookEntry={this.createPhoneBookEntry}
        searchContactByName={this.searchContactByName}
      />
    );
  }
}
