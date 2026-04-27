import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "#fff", py: 4, textAlign: "center" }}>
      <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>
        © {new Date().getFullYear()} Furni
        <span style={{ color: "#f0a500" }}>.</span> All rights reserved.
      </Typography>
    </Box>
  );
}
