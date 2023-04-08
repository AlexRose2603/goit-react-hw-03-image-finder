import styled from '@emotion/styled';

export const Container = styled.header`
  margin: 40px;
`;

export const Form = styled.form`
  text-align: center;
`;

export const SearchInput = styled.input`
  border-radius: 59px;
  background: #62b2b0;
  box-shadow: inset 50px 50px 100px #376463, inset -50px -50px 100px #8dfffd;
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
  border-radius: 48px;
  background: #62b2b0;
  box-shadow: inset 26px 26px 51px #052928, inset -26px -26px 51px #0b5756;
  &:hover {
    background: #97d3d2;
    box-shadow: inset 30px 30px 60px #527271, inset -30px -30px 60px #dcffff;
  }
`;
