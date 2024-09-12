"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PersonalData from "./PersonalData";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/core/context/store";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type TabMenuProps = {
  data: {
    id: string;
    name: string;
    phone: string;
    email: string;
    img: string | null;
    tag: string;
  } | null;
};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabMenu: React.FC<TabMenuProps> = ({ data }) => {
  const [value, setValue] = useState(0);
  const { handlePopulateStore } = useContext(StoreContext);

  useEffect(() => {
    if (data) {
      handlePopulateStore(data);
    }
  }, [data]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Início" {...a11yProps(0)} />
          <Tab label="Dados cadastrado" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PersonalData />
      </CustomTabPanel>
    </Box>
  );
};

export default TabMenu;
