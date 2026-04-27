import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";



export const PRODUCTS = [
  {
    name: "Nordic Chair",
    price: "$50.00",
    img: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=300&q=80",
  },
  {
    name: "Kruzo Aero Chair",
    price: "$78.00",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&q=80",
  },
  {
    name: "Ergonomic Chair",
    price: "$43.00",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=300&q=80",
  },
];

export const WHY_FEATURES = [
  {
    icon: <LocalShippingOutlinedIcon />,
    title: "Fast & Free Shipping",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: <ShoppingBagOutlinedIcon />,
    title: "Easy to Shop",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: <SupportAgentOutlinedIcon />,
    title: "24/7 Support",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: <AutorenewOutlinedIcon />,
    title: "Hassle Free Returns",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
];

export const GALLERY_IMAGES = [
  {
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    style: { gridRow: "1 / 3", gridColumn: "1 / 2" },
  },
  {
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80",
    style: { gridRow: "1 / 2", gridColumn: "2 / 3" },
  },
  {
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80",
    style: { gridRow: "2 / 3", gridColumn: "2 / 3" },
  },
];

export const BLOG_POSTS = [
  {
    name: "Nordic Chair",
    img: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=100&q=80",
    excerpt: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.",
  },
  {
    name: "Kruzo Aero Chair",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&q=80",
    excerpt: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.",
  },
  {
    name: "Ergonomic Chair",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=100&q=80",
    excerpt: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.",
  },
];
