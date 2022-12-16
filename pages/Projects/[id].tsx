import React from 'react';
import Head from 'next/head';
import { projects } from '../../utils/content/index';

type ProjectType = {
    project: {
        id: string,
        name: string,
        src: string,
        alt: string,
        skills: string[],
        href: string,
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
                <title>Project - {project.name} </title>
                <meta name="keywords" content="Yarin Matmoni , portfolio"></meta>
                <meta name="author" content="Yarin Matmoni"></meta>
            </Head>
        </div>
    )
}

export default Project;