import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Routes } from "../types";

const InventoryOverview = () => {
  return (
    <Box>
      <Typography>Inventory Overview</Typography>
      <Typography>Screen that hold a list of inventory: </Typography>

      <Box style={{ display: "flex", flexDirection: "column" }}>
        {[1, 2, 3, 4, 5].map((id) => (
          <Link to={`${Routes.inventory}/${id}${Routes.overview}`}>
            <Box
              style={{
                display: "flex",
                height: 30,
                backgroundColor: "grey",
                marginBottom: 20,
                paddingLeft: 20,
                alignItems: "center",
              }}
            >
              <Typography>{id}</Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default InventoryOverview;
