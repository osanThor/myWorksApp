import styled from 'styled-components';
import { useDarkMode } from '../../hooks/useDarkmode';

const ToggleThemeBtn = () => {
  const [themeMode, handleToggle] = useDarkMode();
  return <ToggleThemeBtnBlock onClick={handleToggle}>토글</ToggleThemeBtnBlock>;
};

const ToggleThemeBtnBlock = styled.div`
  width: 100%;
  cursor: pointer;
`;

export default ToggleThemeBtn;
