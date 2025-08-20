import styled from 'styled-components';

export const ProgressContainer = styled.div`
  margin-bottom: 30px;
`;

export const ProgressText = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #666;
`;

export const ProgressBar = styled.div`
  height: 20px;
  background-color: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background-color: #28a745;
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;

export const ErrorBar = styled.div`
  height: 20px;
  background-color: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const ErrorFill = styled.div`
  height: 100%;
  background-color: #dc3545;
  width: ${props => (props.errorCount / 7) * 100}%;
  transition: width 0.3s ease;
`;
