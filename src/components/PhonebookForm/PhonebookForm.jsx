import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  FormConstolsContainer,
  StyledForm,
  StyledField,
  FieldContainer,
  StyledLabel,
  StyledErrorMessage,
  StyledListItem,
  StyledMaskedInput,
} from './PhonebookForm.styled';
import MaskedInput from 'react-text-mask';

// Инпут маска для номера телефона
const phoneNumberMask = [
  '+',
  /[1-9]/,
  /\d/,
  '(',
  /[0-9]/,
  /\d/,
  /\d/,
  ')',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
];

// Благодаря Formik мы ушли от state и юзаем вот эти значения для инициализации
// Вынес их в объект для удобства
const initialValues = {
  name: '',
  number: '',
};

// Схема для валидации yup
const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too short!')
    .max(32, 'Too long!')
    .required('Required!'),
  number: yup
    .string()
    .matches(/^\+?\d{1,3}\(\d{3}\)\d{2}-\d{2}-\d{3}$/, 'Invalid phone number')
    .required('Required!'),
});

// Далее идёт компонент формы
const PhoneBookForm = ({ contacts, createPhoneBookEntry }) => {
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
          <StyledLabel htmlFor="name">
            Name
            <FieldContainer>
              <StyledField type="text" name="name" />
              <ErrorMessage name="name" component={StyledErrorMessage} />
            </FieldContainer>
          </StyledLabel>

          <StyledLabel htmlFor="number">
            Number
            <FieldContainer>
              <StyledField name="number">
                {({ field }) => (
                  <StyledMaskedInput
                    {...field}
                    mask={phoneNumberMask}
                    placeholder="Enter phone number"
                    id="number"
                    type="text"
                    // component="input"
                    // ^ Тут пришлось убрать component="input". Если его добавить, то React начнёт срать варнингом.
                    // К счастью, по умолчанию InputMask итак использует input.
                    // Но если бы нужно было вставить другой тег, то это вызвало бы головную боль.
                    // Вроде, это как-то решается через <StyleSheetManager shouldForwardProp={(prop) => prop !== 'component'}>
                  />
                )}
              </StyledField>
              <ErrorMessage name="number" component={StyledErrorMessage} />
            </FieldContainer>
          </StyledLabel>

          <div>
            <button type="submit">Add Contact</button>
          </div>
        </FormConstolsContainer>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <StyledListItem key={id}>
              {name}: {number}
            </StyledListItem>
          ))}
        </ul>
      </StyledForm>
    </Formik>
  );
};

PhoneBookForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  createPhoneBookEntry: PropTypes.func.isRequired,
};

export default PhoneBookForm;
