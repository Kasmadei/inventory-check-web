import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Routes } from "../types";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const InventoryOverview = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    window.localStorage.setItem("selectedLng", lng);
  };

  const { t } = useTranslation();

  return (
    <Box>
      <Typography>Inventory Overview</Typography>
      <Typography>Screen that hold a list of inventory: </Typography>

      {/* DEMO */}
      <div>
        <button onClick={() => changeLanguage("cs")}>cs</button>
        <button onClick={() => changeLanguage("en")}>en</button>
        <h1>{t("Welcome to React")}</h1>
      </div>
      {/* DEMO END */}

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
