import { useState } from 'react';
import useWindowDimensions from '../../../hooks/getWindowDimensions';
import TextInput from '../Input';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import { HeaderContainer, MobileSearchInput } from './header-styles';
import MenuToggle from './MenuToggle/MenuToggle';

export const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const { width } = useWindowDimensions();

  function handleOpenSearch() {
    setOpenSearch(!openSearch);
  }

  return (
    <HeaderContainer>
      <div>
        <img src="Logo.svg" alt="Alura Dev" />
      </div>

      {width > 700 ? (
        <TextInput type="search" placeholder="Busque por algo" />
      ) : (
        <button className="searchButton" onClick={handleOpenSearch}>
          <img src="icons/search.svg" alt="Buscar Projetos" />
        </button>
      )}

      {openSearch && width <= 700 && (
        <MobileSearchInput
          type="search"
          placeholder="Busque por algo"
          className="mobile-search"
        />
      )}

      <MenuToggle>
        {width <= 768 && <Menu />}
        <Profile />
      </MenuToggle>
    </HeaderContainer>
  );
};

export default Header;
