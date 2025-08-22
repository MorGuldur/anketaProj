import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const FormSection = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 20px;
  color: #333;
`;

export const SaveButton = styled.button`
  padding: 12px 24px;
  background-color: ${props => props.disabled ? '#6c757d' : '#007bff'};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:hover {
    background-color: ${props => props.disabled ? '#6c757d' : '#0056b3'};
  }
`;