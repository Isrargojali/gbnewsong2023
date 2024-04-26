import { Box, Stack, Link } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

// import { logo } from "../utils/constants";
import { SearchBar } from "./";
import Logo from "./assets/logo1.png"

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-evenly" }} style={{borderBottom: "1px solid gray"}}>
    <Link style={{ display: "flex", alignItems: "center", }}>
      <img src={Logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
    <Box>
    <Link href="https://www.facebook.com/">
      <FacebookIcon style={{color: "#0866FF", fontSize: "40px"}}/>
    </Link>
    <Link href="https://www.instagram.com/">
      <InstagramIcon style={{color: "#BE008B", fontSize: "40px"}}/>
    </Link>
    </Box>
  </Stack>
);

export default Navbar;
