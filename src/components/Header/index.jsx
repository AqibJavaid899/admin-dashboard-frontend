import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h4"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5" }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle" color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
