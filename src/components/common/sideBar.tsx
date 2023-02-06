import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';

const SideBar = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [router]);
  return (
    <SideBarBlock>
      <div
        className={menuOpen ? 'menuToggleBtn on' : 'menuToggleBtn'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={menuOpen ? 'menuWrap on' : 'menuWrap'}>
        <span className="spacer" />
        <ul className="gnb">
          <li>
            <Link href="/about">
              <span className="txt">ABOUT</span>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <span className="txt">WORKS</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="txt">CONTACT</span>
            </Link>
          </li>
        </ul>
        <span className="spacer" />
      </div>
      {children}
    </SideBarBlock>
  );
};

const SideBarBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .menuWrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    .gnb {
      width: 100%;
      li {
        a {
          display: block;
          transition: all 0.2s;
          color: ${({ theme }) => theme.mode.mainColor};
          height: 3rem;
          position: relative;
          span.txt {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 3px;
            transition: all 0.2s ease-in;
          }
          &::before {
            content: '';
            width: 1px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: ${({ theme }) => theme.mode.mainColor};
            transition: all 0.2s ease-in;
            opacity: 0;
          }
          &:hover {
            span.txt {
              color: white;
            }
            &::before {
              width: 100%;
              opacity: 1;
            }
          }
        }
      }
    }
  }

  ${media.tablet} {
    width: auto;
    flex-direction: row;
    align-items: center;
    .menuToggleBtn {
      width: 30px;
      height: 24px;
      cursor: pointer;
      position: relative;
      order: 3;
      margin-left: 1rem;
      span {
        width: 100%;
        height: 3px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.mode.mainColor};
        position: absolute;
        transition: all 0.2s;
        left: 0;
        &:nth-child(1) {
          top: 0;
        }
        &:nth-child(2) {
          top: 49%;
        }
        &:nth-child(3) {
          top: 99%;
        }
      }
      &.on {
        span {
          &:nth-child(1) {
            transform: scale(1.1) rotate(45deg) translate(7px, 6px);
          }
          &:nth-child(2) {
            display: none;
          }
          &:nth-child(3) {
            transform: scale(1.1) rotate(-47deg) translate(10px, -8px);
          }
        }
      }
    }
    .menuWrap {
      display: none;
      opacity: 0;
      z-index: 9;
      transition: all 0.5s;
      &.on {
        opacity: 1;
        display: flex;
        width: 100vw;
        height: calc(100vh - 70px);
        position: absolute;
        top: 70px;
        left: 0;
        background-color: ${({ theme }) => theme.mode.bgColor};
        border-top: 1px solid ${({ theme }) => theme.mode.mainColor};
        padding: 7rem 2rem;
        align-items: center;
        .gnb {
          width: 100px;
          text-align: center;
          li {
            a {
              span.txt {
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }
        }
      }
    }
  }
`;

export default SideBar;
