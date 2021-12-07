import { Box, Typography } from "@mui/material";

const NoMatch = () => {
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Typography>Incorrect URL. No router match</Typography>
    </Box>
  );
};

export default NoMatch;
