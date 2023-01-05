import { Typography, useTheme } from "@mui/material";

const CardTypography = ({ heading, value }) => {
  const theme = useTheme();
  return (
    <Typography sx={{ fontSize: "12px", mb: "5px" }}>
      {heading}:
      <strong
        style={{
          color: theme.palette.secondary[300],
          marginLeft: "5px",
        }}
      >
        {value}
      </strong>
    </Typography>
  );
};

export default CardTypography;
