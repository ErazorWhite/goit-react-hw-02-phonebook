import React from 'react';
import { StyledListItem } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <StyledListItem key={id}>
            {name}: {number}
          </StyledListItem>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
