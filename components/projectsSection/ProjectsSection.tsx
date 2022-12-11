import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';
import { projects } from '../../utils/content/index';
import style from './ProjectsSection.module.scss';

function ProjectsSection() {
    return (
        <div className='section'>
            <div className={style.container}>
                <h2>Projects</h2>
                <p className={style.subtitle}>What I have built</p>
                <div className={style.cards}>
                    {projects.map((project, index) => <ProjectCard key={`${index}_${project.name}`} name={project.name} src={project.src} alt={project.alt} skills={project.skills} href={project.href} />)}
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;