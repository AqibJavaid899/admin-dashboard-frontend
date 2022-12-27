import {
  Box,
  Typography,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronLeftOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  PublicOutlined,
  ReceiptOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  ChevronRightOutlined,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import FlexBetween from "components/Styles/FlexBetween";

const Sidebar = ({
  isNonMobile,
  isSidebarOpen,
  setIsSidebarOpen,
  drawerWidth,
}) => {
  const [activeOption, setActiveOption] = useState("");

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActiveOption(pathname.substring(1));
  }, [pathname]);

  return (
    <Box>
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(!isSidebarOpen)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
            },
          }}
        >
          <Box width="100%">
            {/* Title and Chevron Button */}
            <Box m="1.5rem 0.6rem 1.5rem 2.7rem">
              <FlexBetween gap="0.5rem" color={theme.palette.secondary.main}>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>

            {/* List of Sidebar Buttons */}
            <List>
              {navigationItems.map(({ text, icon }) => {
                //   If Icon is not there in the navigation object
                if (!icon) {
                  return (
                    <Typography
                      key={text}
                      sx={{ margin: "2rem 0 1.5rem 2.5rem" }}
                      fontWeight="bold"
                    >
                      {text}
                    </Typography>
                  );
                }
                // Lowercasing the Text value so that we can navigate to that page
                const lowerCaseText = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setActiveOption(lowerCaseText);
                        navigate(`/${lowerCaseText}`);
                      }}
                      sx={{
                        color:
                          activeOption === lowerCaseText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                        backgroundColor:
                          activeOption === lowerCaseText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        "&:hover": {
                          backgroundColor:
                            activeOption === lowerCaseText
                              ? theme.palette.secondary[300]
                              : "transparent",
                          opacity: 0.8,
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "1.6rem",
                          color:
                            activeOption === lowerCaseText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {activeOption === lowerCaseText && (
                        <ChevronRightOutlined />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

const navigationItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

export default Sidebar;
