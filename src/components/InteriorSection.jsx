import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { GALLERY_IMAGES } from "../constants/data";

export default function InteriorSection() {
  return (
    <Box sx={{ bgcolor: "background.default", py: 10, px: { xs: 4, md: 12 }, width: "100%", boxSizing: "border-box" }}>
      <Grid container spacing={6} alignItems="center">

        {}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: 2,
              height: 420,
            }}
          >
            {GALLERY_IMAGES.map((g, i) => (
              <Box
                key={i}
                component="img"
                src={g.img}
                alt={`gallery-${i}`}
                sx={{
                  ...g.style,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            ))}
          </Box>
        </Grid>

        {}
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            We Help You Make Modern Interior Design
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl
            dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
            dolor tempor tristique. Pellentesque habitant morbi tristique senectus et
            netus et malesuada.
          </Typography>

          {}
          <Grid container spacing={1} sx={{ mb: 3 }}>
            {[...Array(4)].map((_, i) => (
              <Grid item xs={6} key={i}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <FiberManualRecordIcon sx={{ fontSize: 8, color: "primary.main" }} />
                  <Typography variant="body1">
                    Donec vitae odio quis nisl dapibus malesuada
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            sx={{ bgcolor: "#222", "&:hover": { bgcolor: "#000" } }}
          >
            Explore
          </Button>
        </Grid>

      </Grid>
    </Box>
  );
}
