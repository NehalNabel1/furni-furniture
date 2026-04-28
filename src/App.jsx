import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import InteriorSection from "./components/InteriorSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        <Navbar />
        <HeroSection />
        <ProductsSection />
        <InteriorSection />
        <WhyChooseUsSection />
        <BlogSection />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
