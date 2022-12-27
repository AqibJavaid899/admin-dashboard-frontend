import {
  Menu as MenuIcon,
  LightModeOutlined,
  DarkModeOutlined,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { setMode } from "state/slices/globalSlice";
import FlexBetween from "components/Styles/FlexBetween";

const Navbar = ({ setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.global.mode);
  const theme = useTheme();

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
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {mode === "dark" ? <DarkModeOutlined /> : <LightModeOutlined />}
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
