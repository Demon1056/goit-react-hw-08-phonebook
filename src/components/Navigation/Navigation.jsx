import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <>
      {/* {isLoggedIn && ( */}
      <NavLink to="/contacts">Contacts</NavLink>
      {/* )} */}
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </>
  );
};
