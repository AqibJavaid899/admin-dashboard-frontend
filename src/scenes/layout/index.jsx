import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/slices/apiSlice";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const userId = useSelector((state) => state.global.userId);

  const { data } = useGetUserQuery(userId);

  const isNonMobile = useMediaQuery("(min-width: 820px)");

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        drawerWidth="260px"
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          setIsSidebarOpen={setIsSidebarOpen}
          isNonMobile={isNonMobile}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
