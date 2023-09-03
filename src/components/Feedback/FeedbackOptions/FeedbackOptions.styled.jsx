import styled from 'styled-components';

export const FeedbackOptionsContainer = styled.div`
  margin-bottom: 20px;
  padding-left: 15px;
`;

export const Button = styled.button`
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  border-color: #135f2857;
  margin-right: 10px;
  padding: 5px 15px;
  background-color: white;

  &:hover {
    background-color: #2e759585;
  }
`;

export default FeedbackOptionsContainer;