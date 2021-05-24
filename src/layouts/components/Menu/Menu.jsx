import Link from 'next/link';
import { IconContainer, MenuContainer } from './menu-styles';

const Menu = () => {
  return (
    <MenuContainer>
      <h4>MENU</h4>
      <ul>
        <li className="menu-item active">
          <Link href="/">
            <a>
              <IconContainer>
                <img src="icons/code_icon.svg" alt="Editor de código" />
              </IconContainer>
              <p>Editor de código</p>
            </a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/">
            <a>
              <IconContainer>
                <img src="icons/community_icon.svg" alt="Comunidade" />
              </IconContainer>
              <p>Comunidade</p>
            </a>
          </Link>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Menu;
