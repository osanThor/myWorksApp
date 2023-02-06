import styled from 'styled-components';
import { useThemeContext } from '../../contexts/theme.context';
import { WiDaySunny } from 'react-icons/wi';
import { MdOutlineNightlight } from 'react-icons/md';
import colors from '../../assets/colors';

const ToggleThemeBtn = ({ themeToggler }: { themeToggler: () => void }) => {
  const themeName = useThemeContext();
  return (
    <ToggleThemeBtnBlock onClick={themeToggler}>
      {themeName === 'dark' && <MdOutlineNightlight className="icon night" />}
      <span className={themeName === 'light' ? 'themeIcon' : 'themeIcon on'} />
      {themeName === 'light' && <WiDaySunny className="icon day" />}
    </ToggleThemeBtnBlock>
  );
};

const ToggleThemeBtnBlock = styled.div`
  width: 3.5rem;
  min-width: 3.5rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.mode.mainColor};
  border-radius: 3rem;
  padding: 4px;
  height: 1.7rem;
  position: relative;
  span.themeIcon {
    width: 1rem;
    height: 1rem;
    display: flex;
    background-color: ${({ theme }) => theme.mode.mainColor};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    transition: all 0.5s;
    &.on {
      left: 2rem;
    }
  }
  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &.day {
      right: 4px;
      color: ${colors.blue[0]};
    }
    &.night {
      left: 4px;
    }
  }
`;

export default ToggleThemeBtn;
