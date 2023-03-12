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
  color: #16a3a3;
  padding: 5px;

  margin-right: 10px;
  transition: all 0.3s linear;

  &:last-of-type {
    margin-right: 0;
  }

  &.active {
    color: #031062;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #1461c0;
  }

  @media screen and (min-width: 900px) {
    font-size: 32px;
  }
`;
