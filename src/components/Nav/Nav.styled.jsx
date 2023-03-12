import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavEl = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: #3c3636;
  padding: 5px;
  border-left: 1px solid black;
  border-top: 1px solid black;
  border-radius: 10px;

  margin-right: 10px;
  transition: all 0.3s linear;

  &:last-of-type {
    margin-right: 0;
    border-right: 1px solid black;
    border-top: 1px solid black;
    border-left: none;
  }

  &.active {
    color: #cb0000;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #8b0000;
  }

  @media screen and (min-width: 900px) {
    font-size: 32px;
    margin-right: 120px;
    width: 400px;
    text-align: center;
  }
`;
