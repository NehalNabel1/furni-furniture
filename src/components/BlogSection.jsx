import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import { BLOG_POSTS } from "../constants/data";

export default function BlogSection() {
  return (
    <Box sx={{ bgcolor: "#fff", py: 8, px: { xs: 4, md: 12 }, width: "100%", boxSizing: "border-box" }}>
      <Grid container spacing={4}>

        {BLOG_POSTS.map((post) => (
          <Grid item xs={12} sm={4} key={post.name}>
            <Stack direction="row" spacing={2} alignItems="center">

              {}
              <Box
                component="img"
                src={post.img}
                alt={post.name}
                sx={{ width: 80, height: 80, borderRadius: 2, objectFit: "cover" }}
              />

              {}
              <Box>
                <Typography variant="h3" sx={{ mb: 0.5 }}>
                  {post.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 0.5 }}>
                  {post.excerpt}
                </Typography>
                <Button
                  size="small"
                  sx={{ p: 0, minWidth: "auto", color: "primary.main", fontWeight: 600 }}
                >
                  Read More
                </Button>
              </Box>

            </Stack>
          </Grid>
        ))}

      </Grid>
    </Box>
  );
}
