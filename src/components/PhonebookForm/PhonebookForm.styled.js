import { styled } from 'styled-components';
import { Form } from 'formik';

export const FormConstolsContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 200px;
  font-size: 1.2em;
  font-weight: 500;
`;

export const StyledForm = styled(Form)`
  max-width: 500px;
  padding: 20px;
`;

export const FieldContainer = styled.div`
  margin-bottom: 20px;
`;

export const StyledErrorMessage = styled.div`
  font-size: 0.8em;
  color: red;
`;
