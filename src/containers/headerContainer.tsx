import React from 'react';
import Header from '../components/common/header';
import SideBar from '../components/common/sideBar';
import ToggleThemeBtn from '../components/common/toggleThemeBtn';

const HeaderContainer = ({ themeToggler }: { themeToggler: () => void }) => {
  return (
    <Header>
      <SideBar>
        <ToggleThemeBtn themeToggler={themeToggler} />
      </SideBar>
    </Header>
  );
};

export default HeaderContainer;
