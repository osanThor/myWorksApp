import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Logo } from '../../assets/images';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const SkillsLayout = () => {
  return (
    <SkillsLayoutBlock>
      <Canvas>
        <mesh>
          <sphereBufferGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
      <main role="main" id="main">
        <div className="feature">
          <div className="intro-carousel">
            <div className="intro-cell">
              <img src={Logo.src} className="intro-graphic" />
              <div className="intro-text">
                <h2>Services</h2>
                <h1>Web Design &amp; Development</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a>Learn More</a>
              </div>
            </div>
            <div className="intro-cell">
              <img src={Logo.src} className="intro-graphic" />
              <div className="intro-text">
                <h2>Services</h2>
                <h1>Web Strategy</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a>Learn More</a>
              </div>
            </div>
            <div className="intro-cell">
              <img src={Logo.src} className="intro-graphic" />
              <div className="intro-text">
                <h2>Founders</h2>
                <h1>Mr. A &amp; Mr. B</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a>Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SkillsLayoutBlock>
  );
};

const SkillsLayoutBlock = styled.div`
  width: 100%;
  min-height: 450px;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  *,
  :after,
  :before {
    box-sizing: inherit;
  }

  main {
    position: relative;
    perspective: 1500px;
    width: 100%;
  }

  .intro-carousel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      display: none;
    }
  }

  .flickity-viewport {
    height: 100% !important;
  }

  .intro-cell {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .intro-text {
    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
    max-width: 860px;

    h1 {
      font-size: 42px;
      margin: 0;
    }

    h2 {
      font-size: 16px;
      text-transform: uppercase;
      margin: 0;
    }

    p {
      font-size: 18px;
      line-height: 1.5;
    }

    a {
      display: inline-block;
      padding: 15px 30px;
      background: #feca0a;
      border-radius: 99px;
      text-transform: uppercase;
      font-weight: bold;
    }

    .feature {
      height: 800px;
    }
  }
`;

export default SkillsLayout;
