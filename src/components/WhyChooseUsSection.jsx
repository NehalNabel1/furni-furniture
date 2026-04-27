import { Box, Grid, Typography, Stack, Avatar } from "@mui/material";
import { WHY_FEATURES } from "../constants/data";

export default function WhyChooseUsSection() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        py: 10,
        px: { xs: 4, md: 12 },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {}
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Why Choose Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 420 }}>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </Typography>

          <Grid container spacing={3}>
            {WHY_FEATURES.map((feature) => (
              <Grid item xs={12} sm={6} key={feature.title}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <Avatar
                    sx={{
                      bgcolor: "#f0ede8",
                      color: "primary.main",
                      width: 42,
                      height: 42,
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h3" sx={{ mb: 0.5 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1">{feature.desc}</Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80"
            alt="Interior"
            sx={{
              width: "100%",
              borderRadius: 3,
              objectFit: "cover",
              height: 380,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
