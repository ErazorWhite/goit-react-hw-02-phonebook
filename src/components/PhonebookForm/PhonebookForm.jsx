import { Formik, Form, Field, ErrorMessage } from 'formik';

const PhoneBookForm = ({ contacts, name, createPhoneBookEntry }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    createPhoneBookEntry(values);
    resetForm();
  };
  return (
    <Formik initialValues={{ name: '' }} onSubmit={handleSubmit}>
      <Form>
        <h2>Phonebook</h2>
        <div>
          <label htmlFor="nae">
            <p>Name</p>
            <Field type="text" name="name" />
          </label>
          <ErrorMessage name="name" component="div" />
          <div>
            <button type="submit">Add Contact</button>
          </div>
        </div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </Form>
    </Formik>
  );
};

export default PhoneBookForm;
