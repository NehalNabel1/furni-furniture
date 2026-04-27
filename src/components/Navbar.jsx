import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  Badge,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import { NAV_LINKS } from "../constants/data";
export const NAV_LINKS = [
  "Home",
  "Shop",
  "About us",
  "Services",
  "Blog",
  "Contact us",
];

export default function Navbar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ bgcolor: "#3d5a4c", borderBottom: "none", color: "#f5f5f0" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 4, md: 12 } }}>
        <Typography variant="h6" fontWeight={700} sx={{ letterSpacing: 1 }}>
          Furni<span style={{ color: "#f0a500" }}>.</span>
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {NAV_LINKS.map((link, i) => (
            <Button
              key={link}
              sx={{
                fontWeight: i === 0 ? 700 : 400,
                color: "#fff",
                borderBottom: i === 0 ? "2px solid" : "none",
                borderColor: "#f0a500",
                borderRadius: 0,
                px: 1.5,
              }}
            >
              {link}
            </Button>
          ))}
        </Stack>
        <Stack direction="row" spacing={1}>
          <IconButton>
            <PersonOutlineIcon sx={{ color: "#f5f5f0" }} />
          </IconButton>
          <IconButton>
            <ShoppingCartOutlinedIcon sx={{ color: "#f5f5f0" }} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
