import {
  StyledDeleteButton,
  StyledListItem,
  StyledContactEntryBox,
} from './ContactListItem.styled';

const ContactListItem = ({ name, number, deletePhoneBookEntry, id }) => {
  return (
    <StyledListItem>
      <StyledContactEntryBox>
        <span>•</span>
        <p style={{ margin: '6px 0' }}>
          {name}: {number}
        </p>
      </StyledContactEntryBox>
      <StyledDeleteButton onClick={() => deletePhoneBookEntry(id)}>
        Delete
      </StyledDeleteButton>
    </StyledListItem>
  );
};

export default ContactListItem;
