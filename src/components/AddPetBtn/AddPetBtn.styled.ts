import { IoIosAdd } from 'react-icons/io';
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 0;
  padding-left: 14px;
  /* min-width: 129px; */
  border: none;
  border-radius: 22px;

  background-color: transparent;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  color: #111111;

  transition: background-color 250ms ease, color 250ms ease;

  :hover {
    background-color: #f59256;
    color: #fff;
  }
`;

export const Plus = styled(IoIosAdd)`
  width: 36px;
  height: 36px;
  color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #f59256;
`;
