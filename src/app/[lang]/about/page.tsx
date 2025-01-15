"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import ProjectCard from "@/components/project-card";

const About = () => {
    const dict = useDictionary()
    return (
        <>
            <ProjectCard />
        </>
    )
};

export default About;
