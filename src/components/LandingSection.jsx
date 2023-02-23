import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
// Step 2
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size='2xl' src="https://i.pravatar.cc/150?img=7" name="profile picture" />
    <section>
      <p style={{ textAlign: 'center' }}>{greeting}</p>
      <Heading as='h1' mt={7} textAlign="center">{bio1}</Heading>
      <Heading as='h2' textAlign="center">{bio2}</Heading>
    </section>
  </FullScreenSection>
);

export default LandingSection;
