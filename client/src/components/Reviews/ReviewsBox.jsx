import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReviews, postReview } from "../../redux/actions";
//import uploadImageToCloudinary from "../../utils/Cloudinary/uploadImage";
import Reviews from "./Reviews";
import LoginButton from "../Login/LoginButton";
import {
  Box,
  Image,
  Text,
  IconButton,
  Button,
  Card,
  Center,
  Container,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Textarea,
  SimpleGrid,
  Spinner,
  Tab,
  TabPanel,
  Spacer,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

const ReviewsBox = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  const user = useSelector((state) => state.userLogged);

  useEffect(() => {
    dispatch(getReviews());
  }, []);

  let userReview =
    userA &&
    reviews
      .filter((r) => r.userId === user.id)
      .filter((r) => r.eventId === parseInt(id));

  const [input, setInput] = useState({
    rate: "",
    comment: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setInput({
        ...input,
        [name]: e.target.files[0],
      });
    } else if (name === "rate") {
      setInput({
        ...input,
        [name]: parseInt(value),
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { rate, comment } = input;

    let imageUrl;

    await dispatch(
      postReview({
        userId: user ? parseInt(user.id) : 1,
        eventId: parseInt(id),
        rate: rate ? rate : 3,
        comment,
        // image: imageUrl ? imageUrl : null,
      })
    );

    setInput({
      rate: "",
      comment: "",
    });
    dispatch(getReviews());
  };

  return (
    <Box p={4}>
      {!user ? (
        <Box className="">
          <p>Login to write a review</p>
          <Button colorScheme="teal" variant="solid" size="lg">
            <LoginButton />
          </Button>
        </Box>
      ) : userReview.length > 0 ? (
        <Box
          width="95%"
          min-height="5rem"
          display="flex"
          justify="center"
          alignItems="center"
          flexDirection="column"
          gap="0.5rem"
        >
          <Text>You already created your review</Text>{" "}
        </Box>
      ) : (
        <Box w="100%" p={4}>
          <Text
            fontWeight="bold"
            fontSize={{ base: "24px", md: "30px", lg: "35px" }}
            textAlign="center"
          >
            POST YOUR REVIEW!
          </Text>
          <Box width="100%" spacing="100px">
            <span>⭐</span>
            <input
              type="range"
              max="5"
              min="1"
              name="rate"
              value={input.rate}
              onChange={handleOnChange}
            />
            <span>⭐⭐⭐⭐⭐</span>

            {/* <input type="file" name="image" onChange={handleOnChange} /> */}
            <CludinatyUploadComponent />
          </Box>

          <Center>
            <Textarea
              size={{ base: "150px", md: "250px", lg: "400px" }}
              placeholder="Leave your comment"
              name="comment"
              value={input.comment}
              onChange={handleOnChange}
            />
            <Spacer />
            <Button
              colorScheme="teal"
              paddingRight={10}
              variant="solid"
              size="lg"
              onClick={handleSubmit}
            >
              POST
            </Button>
          </Center>
        </Box>
      )}
      <Spacer />
      <HStack spacing="24px">
        <Box display="flex" flexDirection="row" gap="2" flexWrap="wrap">
          {reviews.length > 0 ? (
            reviews
              .filter((r) => r.eventId === parseInt(id))
              .map(({ comment, rate, userId, createdAt, eventId }, i) => {
                return (
                  <Center>
                    <Reviews
                      key={i}
                      comment={comment}
                      //image={image}
                      rate={rate}
                      userId={userId}
                      createdAt={createdAt}
                      eventId={eventId}
                    />
                  </Center>
                );
              })
          ) : (
            <Box className="">
              <Text>No reviews yet. Write yours!</Text>
            </Box>
          )}
        </Box>
      </HStack>
    </Box>
  );
};

export default ReviewsBox;
