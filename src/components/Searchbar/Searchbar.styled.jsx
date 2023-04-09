import styled from '@emotion/styled';

export const Container = styled.header`
  margin: 40px;
`;

export const Form = styled.form`
  text-align: center;
`;

export const SearchInput = styled.input`
  border-radius: 59px;
  background: #d7d963;
  box-shadow: inset 50px 50px 100px #376463, inset -50px -50px 100px #d7d963;
  width: 500px;
  border-color: transparent;

  font-size: 16px;
  padding: 10px;
  margin-right: 15px;
  outline: none;
  &::placeholder {
    padding-left: 15px;
  }
`;

export const SearchBtn = styled.button`
  width: 100px;
  padding: 12px;
  color: white;
  border-color: transparent;
  cursor: pointer;
  border-radius: 43% 57% 61% 39% / 54% 61% 39% 46%;
  background: #62b2b0;
  box-shadow: inset 26px 26px 51px #052928, inset -26px -26px 51px #0b5756;
  &:hover {
    background: #d7d963;
    box-shadow: inset 30px 30px 60px #527271, inset -30px -30px 60px #dcffff;
  }
`;
