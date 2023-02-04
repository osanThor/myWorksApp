import styled from 'styled-components';
import { useDarkMode } from '../../hooks/useDarkmode';

const ToggleThemeBtn = ({ themeToggler }: { themeToggler: () => void }) => {
  return <ToggleThemeBtnBlock onClick={themeToggler}>토글</ToggleThemeBtnBlock>;
};

const ToggleThemeBtnBlock = styled.div`
  cursor: pointer;
`;

export default ToggleThemeBtn;
