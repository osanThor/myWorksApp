import styled, { keyframes } from 'styled-components';

const PageLoading = () => {
  return (
    <PageLoadingBlock>
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </PageLoadingBlock>
  );
};

const Move = keyframes`
    0%  {
        left:0;
        opacity:0;
    }
	35% {
		left: 41%; 
		-moz-transform:rotate(0deg);
		-webkit-transform:rotate(0deg);
		-o-transform:rotate(0deg);
		transform:rotate(0deg);
		opacity:1;
	}
	65% {
		left:59%; 
		-moz-transform:rotate(0deg); 
		-webkit-transform:rotate(0deg); 
		-o-transform:rotate(0deg);
		transform:rotate(0deg); 
		opacity:1;
	}
	100% {
		left:100%; 
		-moz-transform:rotate(-180deg); 
		-webkit-transform:rotate(-180deg); 
		-o-transform:rotate(-180deg); 
		transform:rotate(-180deg);
		opacity:0;
	}
`;

const PageLoadingBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 989;
  background-color: ${({ theme }) => theme.mode.bgColor};

  #load {
    position: absolute;
    width: 600px;
    height: 36px;
    left: 50%;
    top: 40%;
    margin-left: -300px;
    overflow: visible;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;

    div {
      position: absolute;
      width: 20px;
      height: 36px;
      opacity: 0;
      color: ${({ theme }) => theme.mode.mainColor};
      animation: ${Move} 2s linear infinite;
      transform: rotate(180deg);
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
      &:nth-child(4) {
        animation-delay: 0.6s;
      }
      &:nth-child(5) {
        animation-delay: 0.8s;
      }
      &:nth-child(6) {
        animation-delay: 1s;
      }
      &:nth-child(7) {
        animation-delay: 1.2s;
      }
    }
  }
`;

export default PageLoading;
