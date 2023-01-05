import { Box, useMediaQuery } from "@mui/material";
import { ColorRing } from "react-loader-spinner";

import Header from "components/Header";
import ProductCard from "components/ProductCard";
import { useGetProductsQuery } from "state/slices/apiSlice";

const Product = () => {
  const { data, isLoading } = useGetProductsQuery();

  const isMediumScreen = useMediaQuery("(min-width: 1100px)");
  const isMobileScreen = useMediaQuery("(min-width: 600px)");

  return (
    <Box position="relative" m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />

      {/* Product Cards */}
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        columnGap="1.33%"
        rowGap="20px"
        justifyContent="space-between"
        sx={{
          "& > div": {
            gridColumn: isMediumScreen
              ? undefined
              : isMobileScreen
              ? "span 2"
              : "span 4",
          },
        }}
      >
        {data || !isLoading ? (
          data.map(
            ({
              _id,
              name,
              price,
              description,
              rating,
              category,
              supply,
              stats,
            }) => (
              <ProductCard
                key={_id}
                id={_id}
                name={name}
                description={description}
                price={price}
                rating={rating}
                category={category}
                supply={supply}
                stats={stats[0]}
              />
            )
          )
        ) : (
          <Box
            position="absolute"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
          >
            <ColorRing
              visible={isLoading}
              height="60"
              width="60"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Product;
