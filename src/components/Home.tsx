import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Routes } from "../types";

const Home = () => {
  return (
    <Box>
      <Typography>Home</Typography>
      <Link to={`${Routes.overview}`}>
        <Typography>go to inventory overview</Typography>
      </Link>
    </Box>
  );
};

export default Home;
