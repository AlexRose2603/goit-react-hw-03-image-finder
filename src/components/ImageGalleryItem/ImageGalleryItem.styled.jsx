import styled from '@emotion/styled';

export const ImageItem = styled.li`
  border-radius: 54px;
  background: linear-gradient(145deg, #071916, #061513);
  box-shadow: 16px 16px 46px #030b0a, -16px -16px 46px #0b2320;
`;

export const Image = styled.img`
  width: 370px;
  height: 260px;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
