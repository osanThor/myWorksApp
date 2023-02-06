import React from 'react';
import Header from '../components/common/header';
import ToggleThemeBtn from '../components/common/toggleThemeBtn';

const HeaderContainer = ({ themeToggler }: { themeToggler: () => void }) => {
  return (
    <Header>
      <ToggleThemeBtn themeToggler={themeToggler} />
    </Header>
  );
};

export default HeaderContainer;
