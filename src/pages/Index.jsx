import { useState } from "react";
import { Container, VStack, HStack, Box, Text, Input, Button, Avatar, IconButton, Image } from "@chakra-ui/react";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

const postsData = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE1OTU0ODQ1fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    content: "Had a great day at the beach!",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWFjaHxlbnwwfHx8fDE3MTU5NTQ4NDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    likes: 12,
    comments: 4,
    shares: 1,
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTU5NTQ4NDl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    content: "Loving the new React features!",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2Rpbmd8ZW58MHx8fHwxNzE1OTU0ODUxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    likes: 30,
    comments: 10,
    shares: 5,
  },
];

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [shares, setShares] = useState(post.shares);

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="100%">
      <HStack spacing={4} mb={4}>
        <Avatar src={post.user.avatar} />
        <Text fontWeight="bold">{post.user.name}</Text>
      </HStack>
      <Text mb={4}>{post.content}</Text>
      {post.image && <Image src={post.image} mb={4} />}
      <HStack spacing={4}>
        <IconButton aria-label="Like" icon={<FaThumbsUp />} onClick={() => setLikes(likes + 1)} />
        <Text>{likes}</Text>
        <IconButton aria-label="Comment" icon={<FaComment />} onClick={() => setComments(comments + 1)} />
        <Text>{comments}</Text>
        <IconButton aria-label="Share" icon={<FaShare />} onClick={() => setShares(shares + 1)} />
        <Text>{shares}</Text>
      </HStack>
    </Box>
  );
};

const Index = () => {
  const [posts, setPosts] = useState(postsData);
  const [newPostContent, setNewPostContent] = useState("");

  const handlePostSubmit = () => {
    const newPost = {
      id: posts.length + 1,
      user: {
        name: "Current User",
        avatar: "https://images.unsplash.com/photo-1437913135140-944c1ee62782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXJyZW50JTIwdXNlciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNTk1NDg1NHww&ixlib=rb-4.0.3&q=80&w=1080",
      },
      content: newPostContent,
      image: "",
      likes: 0,
      comments: 0,
      shares: 0,
    };
    setPosts([newPost, ...posts]);
    setNewPostContent("");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} w="100%">
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="100%">
          <Text mb={4} fontWeight="bold">
            Create a Post
          </Text>
          <Input placeholder="What's on your mind?" value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)} mb={4} />
          <Button onClick={handlePostSubmit} colorScheme="blue">
            Post
          </Button>
        </Box>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
