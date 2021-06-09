import { useState } from 'react';
import Link from 'next/link';
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
        <Link href="/">
          <a>
            <img src="Logo.svg" alt="Alura Dev" />
          </a>
        </Link>
      </div>

      {width > 700 ? (
        <TextInput
          type="search"
          placeholder="Busque por algo"
          className="search"
        />
      ) : (
        <button className="searchButton" onClick={handleOpenSearch}>
          <img src="icons/search.svg" alt="Buscar Projetos" />
        </button>
      )}

      {width <= 700 && (
        <MobileSearchInput
          type="search"
          placeholder="Busque por algo"
          className={openSearch && 'mobile-search-open'}
        />
      )}

      {width > 768 ? (
        <Profile />
      ) : (
        <MenuToggle>
          <Menu />
          <Profile />
        </MenuToggle>
      )}
    </HeaderContainer>
  );
};

export default Header;
