import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Routes } from "../types";
import ModalBase from "./ModalBase";
import localizationHelper from "../services/i18n/i18nHelper";

type MenuTab = { title: string; path?: string };

const Inventory = () => {
  const { id } = useParams<"id">();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedTab, setSelectedTab] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const url = location.pathname.split("/");
    const tabPath = url[url.length - 1];
    setSelectedTab(`/${tabPath}`);
  }, [location.pathname]);

  const onTabClick = (tab: MenuTab) => {
    if (tab.path) navigate(`${Routes.inventory}/${id}${tab.path}`);
  };

  const tabs: MenuTab[] = [
    {
      title: t(localizationHelper.Inventory.Overview),
      path: `${Routes.overview}`,
    },
    {
      title: t(localizationHelper.Inventory.Scanners),
      path: `${Routes.scanners}`,
    },
    {
      title: t(localizationHelper.Inventory.SplitAssembly),
      path: `${Routes.splitAssembly}`,
    },
    {
      title: t(localizationHelper.Inventory.LocationAndSection),
      path: `${Routes.locationAndSection}`,
    },
    {
      title: t(localizationHelper.Inventory.Control),
      path: `${Routes.control}`,
    },
    {
      title: t(localizationHelper.Inventory.Readers),
      path: `${Routes.readers}`,
    },
    {
      title: t(localizationHelper.Inventory.Attendance),
      path: `${Routes.attendance}`,
    },
  ];

  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Box
        style={{
          height: 30,
          backgroundColor: "#dfdfdf",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        {tabs.map((t) => (
          <Typography
            style={{
              cursor: "pointer",
              color: selectedTab === t.path ? "green" : "black",
            }}
            key={t.path}
            onClick={() => onTabClick(t)}
          >
            {t.title}
          </Typography>
        ))}
      </Box>

      {/* Přehled  */}

      {selectedTab === Routes.overview && (
        <Link
          to={`${Routes.inventory}/${id}${Routes.details}${Routes.overview}`}
        >
          <Typography style={{ cursor: "pointer" }}>
            Ukázat detail inventury
          </Typography>
        </Link>
      )}

      {selectedTab === Routes.scanners && (
        <>
          <Typography>Workers</Typography>
          {[1, 2, 3, 4, 5].map((id) => (
            <Box
              onClick={() => setIsModalOpen(true)}
              style={{
                display: "flex",
                height: 30,
                backgroundColor: "grey",
                marginBottom: 20,
                paddingLeft: 20,
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Typography>{`${id} Click to open profile`}</Typography>
            </Box>
          ))}
        </>
      )}

      {selectedTab === Routes.splitAssembly && (
        <>
          {[1, 2, 3, 4, 5].map((id) => (
            <Box
              onClick={() => setIsModalOpen(true)}
              style={{
                display: "flex",
                height: 30,
                backgroundColor: "grey",
                marginBottom: 20,
                paddingLeft: 20,
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Typography>{`${id}`}</Typography>
            </Box>
          ))}
          <Typography
            style={{ cursor: "pointer" }}
            onClick={() => setIsModalOpen(true)}
          >
            Nahrát rozdílovou sestavu
          </Typography>
          <Typography
            style={{ cursor: "pointer" }}
            onClick={() => setIsModalOpen(true)}
          >
            tisk
          </Typography>
        </>
      )}

      {selectedTab === Routes.locationAndSection && (
        <>
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
          >
            sekce
          </Box>
          <Typography
            style={{ cursor: "pointer" }}
            onClick={() => setIsModalOpen(true)}
          >
            Přidat sekce
          </Typography>
          <Typography
            style={{ cursor: "pointer" }}
            onClick={() => setIsModalOpen(true)}
          >
            Přidat lokace do sekce
          </Typography>
        </>
      )}

      <ModalBase
        center
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Box style={{ height: 600, width: 600, backgroundColor: "white" }}>
          <Typography style={{ marginTop: 20, marginLeft: 20 }}>
            MODAL
          </Typography>
        </Box>
      </ModalBase>
    </Box>
  );
};

export default Inventory;
