import { Component } from 'react';
import PhoneBookForm from './PhonebookForm/PhonebookForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  createPhoneBookEntry = data => {
    const newPhoneBookEntry = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newPhoneBookEntry],
    }),
      () => {
        console.log('Updated contacts:', this.state.contacts); // Вывод состояния после обновления
      });
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <PhoneBookForm
        contacts={contacts}
        name={name}
        createPhoneBookEntry={this.createPhoneBookEntry}
      />
    );
  }
}
