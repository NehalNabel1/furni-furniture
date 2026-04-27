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
import { NAV_LINKS } from "../constants/data";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ bgcolor: "#fff", borderBottom: "1px solid #eee" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 4, md: 12 } }}>
        <Typography variant="h6" fontWeight={700} color="text.primary" sx={{ letterSpacing: 1 }}>
          Furni<span style={{ color: "#f0a500" }}>.</span>
        </Typography>
        <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
          {NAV_LINKS.map((link, i) => (
            <Button
              key={link}
              color="inherit"
              sx={{
                fontWeight: i === 0 ? 700 : 400,
                color: i === 0 ? "primary.main" : "text.secondary",
                borderBottom: i === 0 ? "2px solid" : "none",
                borderColor: "secondary.main",
                borderRadius: 0,
                px: 1.5,
              }}
            >
              {link}
            </Button>
          ))}
        </Stack>
        <Stack direction="row" spacing={1}>
          <IconButton><PersonOutlineIcon /></IconButton>
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
