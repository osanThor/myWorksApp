import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Logo, Skill } from '../../assets/images';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from 'react-particle-image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import colors from '../../assets/colors';

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => '#61dafb',
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};
const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 10);
};

const SkillsLayout = () => {
  return (
    <SkillsLayoutBlock>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="intro-cell">
            <ParticleImage
              src={Skill.src}
              width={300}
              height={300}
              scale={0.5}
              entropy={10}
              maxParticles={4000}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
              touchMoveForce={motionForce}
              backgroundColor={colors.white}
            />
            <div className="intro-text">
              <h2 className="blue">FE</h2>
              <h1>
                <span className="yellow">Java</span>Script
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="intro-cell">
            <img src={Logo.src} className="intro-graphic" />
            <div className="intro-text">
              <h2 className="blue">FE</h2>
              <h1>
                <span className="blue">Type</span>Script
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="intro-cell">
            <img src={Logo.src} className="intro-graphic" />
            <div className="intro-text">
              <h2 className="blue">FE</h2>
              <h1>
                <span className="cyan">React</span> &amp; Next
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="intro-cell">
            <img src={Logo.src} className="intro-graphic" />
            <div className="intro-text">
              <h2 className="red">Style</h2>
              <h1>
                Sass<span className="pink">(Scss)</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="intro-cell">
            <img src={Logo.src} className="intro-graphic" />
            <div className="intro-text">
              <h2 className="red">Style</h2>
              <h1>
                <span className="pink">Styled</span> Component
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="intro-cell">
            <img src={Logo.src} className="intro-graphic" />
            <div className="intro-text">
              <h2 className="green">BE</h2>
              <h1>
                <span className="red">Fire</span>base
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </SkillsLayoutBlock>
  );
};

const SkillsLayoutBlock = styled.div`
  width: 100%;
  min-height: 430px;
  display: flex;
  margin: 2rem 0;

  .intro-cell {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      max-width: 100%;
    }
  }

  .intro-text {
    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
    max-width: 860px;
    .cyan {
      color: ${colors.cyan};
    }
    .blue {
      color: ${colors.blue};
    }
    .yellow {
      color: ${colors.pastel[1]};
    }
    .green {
      color: ${colors.pastel[3]};
    }
    .red {
      color: ${colors.red[2]};
    }
    .pink {
      color: ${colors.pastel[0]};
    }
    h1 {
      font-size: 2.7rem;
      margin: 0;
      margin-bottom: 1.5rem;
      color: ${colors.dark[0]};
    }

    h2 {
      font-size: 16px;
      text-transform: uppercase;
      margin: 0;
      margin-bottom: 0.7rem;
    }

    p {
      font-size: 18px;
      line-height: 1.2;
    }

    .feature {
      height: 800px;
    }
  }
`;

export default SkillsLayout;
