import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../../../styles/theme';
import colors from '../../assets/colors';

const MainTxt = () => {
  return (
    <MainTxtBlock>
      <div className="content">
        <div className="container">
          <p className="text">Hello</p>

          <ul className="list">
            <li className="item">world !</li>
            <li className="item">주님 !</li>
            <li className="item">고용주님 !</li>
            <li className="item">everybody !</li>
          </ul>
        </div>
      </div>
    </MainTxtBlock>
  );
};

const Opacity = keyframes`
  0%, 100% {opacity:0;}
    50% {opacity:1;}
`;

const Change = keyframes`
   0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}
`;

const MainTxtBlock = styled.div`
  width: 100%;
  height: 150px;
  color: ${colors.blue};
  position: relative;
  margin-bottom: 2rem;
  &::before {
    content: '<h1>';
    top: 0;
  }
  &::after {
    content: '</h1>';
    bottom: 0;
  }
  &:after,
  &:before {
    position: absolute;
    left: 0;
    font-size: 1.7rem;
    font-family: 'Caramel';
  }

  .content {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    font-size: 5rem;
    line-height: 5rem;
    color: ${colors.cyan};

    .container {
      font-weight: 800;
      overflow: hidden;
      height: 5rem;
      padding: 0 40px;

      &:before {
        content: '[';
        left: 0;
      }

      &:after {
        content: ']';
        position: absolute;
        right: 0;
      }

      &:after,
      &:before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        color: ${colors.blue};
        font-size: 3rem;
        line-height: 4rem;

        -webkit-animation-name: ${Opacity};
        -webkit-animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
        animation-name: ${Opacity};
        animation-duration: 2s;
        animation-iteration-count: infinite;
      }

      .text {
        display: inline;
        float: left;
        margin: 0;
        transition: all 0.2s;
      }

      .list {
        margin-top: 0;
        padding-left: 250px;
        text-align: left;
        list-style: none;

        -webkit-animation-name: ${Change};
        -webkit-animation-duration: 10s;
        -webkit-animation-iteration-count: infinite;
        animation-name: ${Change};
        animation-duration: 10s;
        animation-iteration-count: infinite;

        .item {
          line-height: 5rem;
          white-space: nowrap;
          margin: 0;
          transition: all 0.2s;
        }
      }
    }
  }

  ${media.tablet} {
    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2.5rem;
      line-height: 2.5rem;
      color: ${colors.cyan};

      .container {
        overflow: hidden;
        height: 2.5rem;
        padding: 0 40px;

        &:before {
          content: '[';
          left: 0;
        }

        &:after {
          content: ']';
          position: absolute;
          right: 0;
        }

        &:after,
        &:before {
          font-size: 3rem;
          line-height: 4rem;
        }

        .list {
          margin-top: 0;
          padding-left: 100px;

          .item {
            line-height: 2.5rem;
          }
        }
      }
    }
  }
`;

export default MainTxt;
