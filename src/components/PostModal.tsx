import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Stack,
  StackDivider,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Card,
  CardBody,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { ChatIcon, StarIcon } from "@chakra-ui/icons";
import { Comments } from "../interfaces";
import { useFavoriteContext } from "../context/FavoriteContext";

type PostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
  comment: Comments[];
  id: number;
};

const PostModal: React.FC<PostModalProps> = ({
  isOpen,
  onClose,
  title,
  body,
  tags,
  reactions,
  comment,
  id,
}) => {
  const { favorites, toggleFavorite } = useFavoriteContext();

  const handleFavoriteClick = () => {
    toggleFavorite(id);
  };

  const isFavorite = favorites.includes(id);

  return (
    <>
      <Modal isOpen={isOpen} size={"xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#2d3747" w="100%" mb={5} color="#fff">
            {isFavorite ? <StarIcon color="yellow.500" /> : ""} {title}
          </ModalHeader>
          <ModalCloseButton color="#fff" />
          <ModalBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Text>{body}</Text>
              </Box>
              <Box>
                <Text>
                  Tags:{" "}
                  {tags.map((tag, index) => (
                    <Badge key={index} mr={2} colorScheme="green">
                      {tag}
                    </Badge>
                  ))}
                </Text>
              </Box>
              <Box>
                <p>Reactions: {reactions}</p>
              </Box>
              <Accordion allowMultiple>
                <AccordionItem>
                  <AccordionButton flex="1">
                    <Box as="span" flex="1" textAlign="left">
                      Comments <ChatIcon />
                    </Box>
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    {comment.map((c, i) => (
                      <Card align="center" mt={5} key={i}>
                        <CardBody>
                          <Text data-testid="comment">{c.body}</Text>
                        </CardBody>
                      </Card>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Stack>
          </ModalBody>
          <Flex justifyContent="center">
            <ModalFooter>
              <Box>
                <IconButton
                  colorScheme={isFavorite ? "yellow" : "twitter"}
                  variant="outline"
                  color={isFavorite ? "yellow.500" : "blue.900"}
                  aria-label="Favorite"
                  size="lg"
                  onClick={handleFavoriteClick}
                  icon={<StarIcon />}
                />
              </Box>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostModal;
