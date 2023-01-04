import { useState } from "react";
import {
  Menu as MenuIcon,
  LightModeOutlined,
  DarkModeOutlined,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { setMode } from "state/slices/globalSlice";
import FlexBetween from "components/Styles/FlexBetween";
import profile from "assets/profile.jpg";

const Navbar = ({ user, setIsSidebarOpen, isNonMobile }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.global.mode);
  const theme = useTheme();

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
        height: "4.2rem",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Navbar */}
        <FlexBetween gap="6px">
          <IconButton
            onClick={() => setIsSidebarOpen((prevState) => !prevState)}
          >
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="10px"
            padding="0.1rem 1.5rem"
            gap="3rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* Right Navbar */}
        <FlexBetween gap="1.2rem" ml="1rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {mode === "dark" ? <DarkModeOutlined /> : <LightModeOutlined />}
          </IconButton>
          {isNonMobile && (
            <IconButton>
              <SettingsOutlined />
            </IconButton>
          )}

          <Button
            onClick={(event) => handleClick(event)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              textTransform: "none",
            }}
          >
            <Box
              component="img"
              src={profile}
              height="36px"
              width="36px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
            <Box textAlign="left">
              <Typography
                fontSize="0.8rem"
                fontWeight="bold"
                sx={{ color: theme.palette.secondary[100] }}
              >
                {user.name}
              </Typography>
              <Typography
                fontSize="0.7rem"
                sx={{ color: theme.palette.secondary[200] }}
              >
                {user.occupation}
              </Typography>
            </Box>
            <ArrowDropDownOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
            />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={() => handleClose()}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: theme.palette.background.alt,
                width: "140px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              "& .MuiButtonBase-root": {
                backgroundColor: "transparent",
              },
            }}
          >
            <MenuItem onClick={() => handleClose()}>Logout</MenuItem>
          </Menu>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
