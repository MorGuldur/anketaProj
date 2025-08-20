import styled from 'styled-components';

export const InputGroup = styled.div`
  max-width: 560px;
  min-width: 560px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid ${props => (props.hasError ? '#ff4444' : '#ccc')};
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${props => (props.hasError ? '#ff4444' : '#007bff')};
    box-shadow: 0 0 0 2px
      ${props =>
        props.hasError ? 'rgba(255, 68, 68, 0.2)' : 'rgba(0, 123, 255, 0.25)'};
  }
`;

export const ErrorText = styled.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;
