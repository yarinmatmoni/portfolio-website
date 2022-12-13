import React from 'react';
import SkillCard from '../skillCard/SkillCard';
import { skills } from '../../utils/content/index';
import style from './SkillSection.module.scss';

function SkillsSection() {
    return (
        <div className="section" id="skills">
            <div className={style.skillsSectionContainer}>
                <h2>Skills</h2>
                <p className={style.subtitle}>What Can I Do</p>
                <div className={style.skillsContainer}>
                    {skills.map((skill) => <SkillCard key={skill.name} name={skill.name} src={skill.src} alt={skill.alt} color={skill.color} />)}
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;