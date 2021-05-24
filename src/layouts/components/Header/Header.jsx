import useWindowDimensions from '../../../hooks/getWindowDimensions';
import TextInput from '../Input';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import { HeaderContainer } from './header-styles';
import MenuToggle from './MenuToggle/MenuToggle';

export const Header = () => {
  const { width } = useWindowDimensions();
  return (
    <HeaderContainer>
      <div>
        <img src="Logo.svg" alt="Alura Dev" />
      </div>

      {width > 700 ? (
        <TextInput type="search" placeholder="Busque por algo" />
      ) : (
        <button className="searchButton">
          <img src="icons/search.svg" alt="Buscar Projetos" />
        </button>
      )}

      <MenuToggle>
        {width <= 768 && <Menu />}

        <Profile />
      </MenuToggle>
    </HeaderContainer>
  );
};

export default Header;
