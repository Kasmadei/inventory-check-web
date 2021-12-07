import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const InventoryDetails = () => {
  const { id } = useParams<"id">();
  return (
    <>
      <Typography>{`Inventory details with id: ${id}`}</Typography>
    </>
  );
};

export default InventoryDetails;
