import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const BlogContent = ({ post }: any) => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" component="p" gutterBottom>
        {post.author}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        {post.content}
      </Typography>
    </Box>
  );
};

export default BlogContent;
