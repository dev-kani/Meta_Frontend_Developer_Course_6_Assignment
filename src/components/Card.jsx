import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardItem = ({ title, description, imageSrc }) => (
  <Card maxW='sm'>
    <CardBody>
      <Image
        src={imageSrc}
        alt={title}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{title}</Heading>
        <Text>{description}</Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <Text>see more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
    </CardFooter>
  </Card>
)

export default CardItem;
