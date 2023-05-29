import { Helmet } from 'react-helmet-async';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../../components/Dashboard/blog';

import POSTS from '../../_mock/blog';


export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> ADD BOOK | MI_LIBRO </title>
      </Helmet>

      <Container>
        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
