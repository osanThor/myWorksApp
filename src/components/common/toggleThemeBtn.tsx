import styled from 'styled-components';

const ToggleThemeBtn = ({
  themeMode,
  useDarkmode,
}: {
  themeMode: string;
  useDarkmode: () => void;
}) => {
  return <ToggleThemeBtnBlock onClick={useDarkmode}>토글</ToggleThemeBtnBlock>;
};

const ToggleThemeBtnBlock = styled.div`
  width: 100%;
  cursor: pointer;
`;

export default ToggleThemeBtn;
