import React from 'react';
import Section from '../../components/common/section';
import Title from '../../components/common/title';
import SkillsSlider from '../../components/skills/skillsSlider';
import SkillWrap from '../../components/skills/skillWrap';

const SkillsSection = () => {
  return (
    <Section>
      <Title title={'SKILLS'} />
      <SkillsSlider />
      <SkillWrap />
    </Section>
  );
};

export default SkillsSection;
