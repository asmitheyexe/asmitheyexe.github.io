import { Box, Stack, Container , Button,Link} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Stack>
          <NavBar />
          <Container>
            <Routes>
              <Route path={"/"} Component={Home} />
              <Route path={"/about"} Component={About} />
              <Route path={"/contact"} Component={ContactUs} />
            </Routes>
          </Container>
        </Stack>
      </BrowserRouter>
    </Box>
  );
}

const NavBar = () => {
  return (
    <Stack justifyContent={"space-evenly"} direction={'row'}>
      <Button variant="outlined" ><Link href="/" underline="none" >Home</Link></Button>
      <Button variant="outlined"><Link href="/about" underline="none">About</Link></Button>
      <Button variant="outlined"><Link href="/contact" underline="none">Contact us</Link></Button>
    </Stack>
  );
};
export default App;
