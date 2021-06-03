import { useState } from 'react';
import { Hamburger, MenuToggleContainer, Overlay } from './menuToggle-styles';

export const MenuToggle = ({ children }) => {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(!open);
  }

  return (
    <>
      <Hamburger onClick={handleClickOpen} open={open}>
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
      </Hamburger>
      <MenuToggleContainer className={open && 'menu-open'} open={open}>
        {children}
      </MenuToggleContainer>
      <Overlay
        className={open && 'overlay-visible'}
        onClick={handleClickOpen}
      />
    </>
  );
};

export default MenuToggle;
