import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import CardTypography from "components/CardTypography";
import { useState } from "react";

const ProductCard = ({
  id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stats,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.alt,
        backgroundImage: "none",
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          color={theme.palette.secondary[300]}
          fontSize={14}
          gutterBottom
        >
          {category}
        </Typography>

        <Typography variant="subtitle">{name}</Typography>

        <Typography
          color={theme.palette.secondary[400]}
          sx={{ mb: "1.4rem", fontSize: "14px" }}
        >
          ${Number(price).toFixed(2)}
        </Typography>

        <Box mb="10px">
          <Rating value={rating} readOnly />
        </Box>

        <Typography
          variant="h5"
          sx={{ fontSize: "12px" }}
          color={theme.palette.secondary[100]}
        >
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          sx={{
            color: theme.palette.secondary[300],
            fontSize: 14,
          }}
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>

      {/* Collapsable Component */}
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{ color: theme.palette.neutral[300], fontSize: "12px" }}
      >
        <CardContent>
          <CardTypography heading="id" value={id} />

          <CardTypography heading="Supply Left" value={supply} />

          <CardTypography
            heading="Yearly Sales this Year"
            value={stats.yearlySalesTotal || 0}
          />

          <CardTypography
            heading="Yearly units sold this Year"
            value={stats.yearlyTotalSoldUnits || 0}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProductCard;
