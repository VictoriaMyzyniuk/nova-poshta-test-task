import { StyledNavLink, NavEl } from 'components/Nav/Nav.styled';
export const Nav = () => {
  return (
    <header>
      <NavEl>
        <StyledNavLink to="/">Перевірити ТТН</StyledNavLink>
        <StyledNavLink to="/list">Список відділень</StyledNavLink>
      </NavEl>
    </header>
  );
};
