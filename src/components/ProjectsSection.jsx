import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import photo1 from "../assets/images/photo1.jpg"
import photo2 from "../assets/images/photo2.jpg"
import photo3 from "../assets/images/photo3.jpg"
import photo4 from "../assets/images/photo4.jpg"
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    img: photo1
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    img: photo2
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    img: photo3
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    img: photo4
  },
];

// Step 3

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.img}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
