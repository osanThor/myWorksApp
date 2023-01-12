import React from 'react';
import Section from '../../components/common/section';
import Title from '../../components/common/title';
import SkillsSlider from '../../components/skills/skillsSlider';

const SkillsSection = () => {
  return (
    <Section>
      <Title title={'SKILLS'} />
      <SkillsSlider />
    </Section>
  );
};

export default SkillsSection;
