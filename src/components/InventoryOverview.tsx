import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "../types";
import i18n from "../services/i18n/i18n";
import { InventoryDto } from "../shared/types/InventoryTypes";
import { useEffect, useState } from "react";
import { InventoryManager } from "../services/api/InventoryManager";
import moment from "moment";

const INVENTORY_MOCK: InventoryDto[] = [
  {
    id: "inventoryDto-id-1",
    createdAt: new Date(),
    lastModifiedAt: new Date(),
    estimatedStartAt: new Date(),
    state: "notStarted",
    enableOnlyUnitScan: false,
    alwaysShowWarningAfterUnknownScan: true,
    branchAddress: "1",
    branchNumber: 1,
    inventoryType: "assets",
    estimatedItemsNumber: 5,
    useCustomerLocations: false,
  },
  {
    id: "inventoryDto-id-2",
    createdAt: new Date(),
    lastModifiedAt: new Date(),
    estimatedStartAt: new Date(),
    state: "notStarted",
    enableOnlyUnitScan: false,
    alwaysShowWarningAfterUnknownScan: true,
    branchAddress: "2",
    branchNumber: 2,
    inventoryType: "assets",
    estimatedItemsNumber: 5,
    useCustomerLocations: false,
  },
];

console.log(INVENTORY_MOCK);

const InventoryOverview = () => {
  const [allInventories, setAllInventories] = useState<InventoryDto[]>([]);
  const navigate = useNavigate();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    window.localStorage.setItem("selectedLng", lng);
  };

  useEffect(() => {
    const fetchAllInventories = async () => {
      try {
        const _inventoryManager = InventoryManager.getManager();
        const data = await _inventoryManager.fetchAllInventoriesAsync();
        setAllInventories(data.inventories);
      } catch (e: any) {
        console.log(e.toString());
      }
    };
    fetchAllInventories();
  }, []);

  return (
    <Box>
      <Typography>Inventory</Typography>

      {/* DEMO */}
      <div>
        <button onClick={() => changeLanguage("cs")}>cs</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>
      {/* DEMO END */}

      <Box style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
        {INVENTORY_MOCK.map((i) => (
          <Box
            style={{
              display: "flex",
              height: 30,
              backgroundColor: "grey",
              marginBottom: 20,
              paddingLeft: 20,
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() =>
              navigate(`${Routes.inventory}/${i.id}${Routes.overview}`)
            }
          >
            <Typography>
              {moment(INVENTORY_MOCK[0].createdAt).format("DD-MM-YYYY")}
            </Typography>
            <Typography style={{ marginLeft: 12 }}>{i.id}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InventoryOverview;
