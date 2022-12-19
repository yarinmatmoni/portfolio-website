import React from 'react';
import Head from 'next/head';
import ImageSection from '../../components/imageSection/ImageSection';
import OverviewSection from '../../components/overviewSection/OverviewSection';
import { projects } from '../../utils/content/index';
// import style from '../../styles/Project.module.scss';

type ProjectType = {
    project: {
        id: string,
        name: string,
        src: string,
        alt: string,
        skills: string[],
        href: string,
        backgroundImage: string,
        overView: string,
        technologies: string[],
    }
}

export const getStaticPaths = async () => {
    const paths = projects.map((project) => {
        return {
            params: { id: project.id }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const currentProject = projects.filter(p => p.id === context.params.id);

    return {
        props: { project: currentProject[0] }
    }
}

function Project({ project }: ProjectType) {
    return (
        <div>
            <Head>
                <title>{`Project - ${project.name}`}</title>
                <meta name="keywords" content="Yarin Matmoni , portfolio"></meta>
                <meta name="author" content="Yarin Matmoni"></meta>
            </Head>
            <ImageSection src={project.backgroundImage} name={project.name} skills={project.skills}></ImageSection>
            <OverviewSection overview={project.overView} technologies={project.technologies}></OverviewSection>
        </div>
    )
}

export default Project;