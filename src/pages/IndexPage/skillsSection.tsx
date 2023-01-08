import React from 'react';
import Section from '../../components/common/section';
import Title from '../../components/common/title';
import SkillsLayout from '../../components/skills/skillsLayout';

const SkillsSection = () => {
  return (
    <Section>
      <Title title={'SKILLS'} />
      <SkillsLayout />
    </Section>
  );
};

export default SkillsSection;
