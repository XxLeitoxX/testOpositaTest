import React from "react";
import {
  Text,
  Badge,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Flex,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useFavoriteContext } from "../context/FavoriteContext";
import { Post } from "../interfaces";

const PostItem: React.FC<Post> = ({ id, title, tags, reactions }) => {
  const { favorites } = useFavoriteContext();

  const isFavorite = favorites.includes(id);

  return (
    <Card align="center" cursor="pointer" mt={5} mb={5}>
      <CardHeader bg="#2d3747" w="100%" h={55}>
        <Flex justifyContent="end">
          {isFavorite && <StarIcon color="yellow.400" fontSize="25px" />}
        </Flex>
      </CardHeader>
      <Heading size="md" m={5}>
        {title}
      </Heading>
      <CardBody>
        <Text>Tags:</Text>
        <Text>
          {tags.map((tag, index) => (
            <Badge key={index} mr={2} colorScheme="green">
              {tag}
            </Badge>
          ))}
        </Text>
      </CardBody>
      <CardFooter>
        <Text mr={2}>{reactions} reactions</Text>
      </CardFooter>
    </Card>
  );
};

export default PostItem;
