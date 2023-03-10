import { NavLink } from 'react-router-dom';
export const Nav = () => {
  console.log('nav render');
  return (
    <nav>
      <NavLink to="/">Перевірити ТТН</NavLink>
      <NavLink to="/list">Список відділень</NavLink>
    </nav>
  );
};
