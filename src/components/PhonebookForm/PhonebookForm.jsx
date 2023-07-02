import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  FormConstolsContainer,
  StyledForm,
  FieldContainer,
  StyledLabel,
  StyledErrorMessage,
} from './PhonebookForm.styled';

const initialValues = {
  name: '',
  contacts: [],
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too short!')
    .max(32, 'Too long!')
    .required('Required!'),
});

const PhoneBookForm = ({ contacts, name, createPhoneBookEntry }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    createPhoneBookEntry(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledForm>
        <h2>Phonebook</h2>
        <FormConstolsContainer>
          <StyledLabel htmlFor="nae">
            Name
            <FieldContainer>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component={StyledErrorMessage} />
            </FieldContainer>
          </StyledLabel>
          <div>
            <button type="submit">Add Contact</button>
          </div>
        </FormConstolsContainer>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </StyledForm>
    </Formik>
  );
};

PhoneBookForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  createPhoneBookEntry: PropTypes.func.isRequired,
};

export default PhoneBookForm;
