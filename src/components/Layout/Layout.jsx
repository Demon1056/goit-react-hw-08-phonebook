import { Outlet } from 'react-router-dom';
import { PhoneBook, LayoutArea } from './Layout.styled';
import { Navigation } from 'components/Navigation/Navigation';
const Layout = () => {
  return (
    <PhoneBook>
      <LayoutArea>
        <p>mango@mail.com</p>
        <button>Logout</button>
      </LayoutArea>
      <LayoutArea>
        <Navigation />
      </LayoutArea>
      <Outlet />{' '}
    </PhoneBook>
  );
};

export default Layout;
