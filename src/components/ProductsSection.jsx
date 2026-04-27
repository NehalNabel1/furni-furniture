import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { PRODUCTS } from "../constants/data";

export default function ProductsSection() {
  return (
    <Box sx={{ bgcolor: "background.default", py: 10, px: { xs: 4, md: 12 }, width: "100%", boxSizing: "border-box" }}>
      <Grid container spacing={6} alignItems="flex-start">

        {}
        <Grid item xs={12} md={3}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Crafted with excellent material.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
            Aliquam vulputate velit imperdiet dolor tempor tristique.
          </Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: "#222", "&:hover": { bgcolor: "#000" } }}
          >
            Explore
          </Button>
        </Grid>

        {}
        {PRODUCTS.map((product) => (
          <Grid item xs={12} sm={4} md={3} key={product.name}>
            <Card elevation={0} sx={{ bgcolor: "transparent", textAlign: "center" }}>
              <CardMedia
                component="img"
                image={product.img}
                alt={product.name}
                sx={{
                  height: 200,
                  objectFit: "contain",
                  bgcolor: "#f0ede8",
                  borderRadius: 2,
                  p: 2,
                }}
              />
              <CardContent>
                <Typography variant="h3">{product.name}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

      </Grid>
    </Box>
  );
}
