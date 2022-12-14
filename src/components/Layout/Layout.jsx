import { Outlet } from 'react-router-dom';
import { PhoneBook, LayoutArea } from './Layout.styled';
const Layout = () => {
  return (
    <PhoneBook>
      <LayoutArea>
        <p>mango@mail.com</p>
        <button>Logout</button>
      </LayoutArea>
      <Outlet />{' '}
    </PhoneBook>
  );
};

export default Layout;
