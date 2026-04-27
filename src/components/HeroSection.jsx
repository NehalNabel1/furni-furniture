import { Box, Typography, Button, Stack } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "#fff",
        width: "100vw",
        py: { xs: 6, md: 10 },
        px: { xs: 4, md: 12 },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 4,
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ maxWidth: 420 }}>
        <Typography variant="h1" sx={{ color: "#fff", mb: 2 }}>
          Modern Interior Design Studio
        </Typography>
        <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.75)", mb: 4 }}>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="secondary" size="large">
            Shop Now
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)", "&:hover": { borderColor: "#fff" } }}
          >
            Explore
          </Button>
        </Stack>
      </Box>
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
        alt="Modern Sofa"
        sx={{ width: { xs: "100%", md: "50%" }, maxWidth: 560, borderRadius: 3, objectFit: "cover", height: 320 }}
      />
    </Box>
  );
}
