import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Logo, Skill } from '../../assets/images';
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from 'react-particle-image';
import sliderSkills from '../../data/sliderSkill.json';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import colors from '../../assets/colors';
import Observer from '../../utils/observer';

interface SkillProps {
  skill: {
    id: number;
    logoNum: number;
    logoColor: string;
    skillCategory: string;
    skillTitle: string;
    skillDes: string;
  };
}

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
        {sliderSkills?.map((skill) => (
          <SwiperSlide key={skill.id}>
            <SkillSliderItem skill={skill} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SkillsLayoutBlock>
  );
};

const SkillSliderItem = ({ skill }: SkillProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    Observer(targetRef, setVisible);
  }, [targetRef]);

  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => skill.logoColor,
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
      return new Vector(
        canvasDimensions.width / 2,
        canvasDimensions.height / 2,
      );
    },
  };

  const skillTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!skillTitleRef.current) return;
    skillTitleRef.current.innerHTML = skill?.skillTitle;
  }, [skillTitleRef, skill]);

  const [cateColor, setCateColor] = useState('blue');

  useEffect(() => {
    if (skill?.skillCategory === 'FE') {
      setCateColor('blue');
    } else if (skill?.skillCategory === 'STYLE') {
      setCateColor('red');
    } else if (skill?.skillCategory === 'BE') {
      setCateColor('cyan');
    }
  }, [skill?.skillCategory]);

  return (
    <div className="intro-cell" ref={targetRef}>
      {visible && (
        <ParticleImage
          src={Skill[skill.logoNum].src}
          width={310}
          height={310}
          scale={0.5}
          entropy={10}
          maxParticles={4000}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
          backgroundColor={colors.white}
        />
      )}
      <div className="intro-text">
        <h2 className={cateColor}>{skill.skillCategory}</h2>
        <h1 ref={skillTitleRef} />
        <p>{skill.skillDes}</p>
      </div>
    </div>
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
