import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Header from "components/Header";
import { useGetCustomersQuery } from "state/slices/apiSlice";

const StyledDataGrid = styled(Box)(({ theme }) => ({
  height: "75vh",
  marginTop: "40px",
  "& .MuiDataGrid-root": {
    border: "none",
  },
  "& .MuiDataGrid-cell": {
    borderBottom: "none",
  },
  "& .MuiDataGrid-columnHeaders": {
    borderBottom: "none",
    backgroundColor: theme.palette.background.alt,
    color: theme.palette.secondary[100],
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: "none",
    backgroundColor: theme.palette.background.alt,
    color: theme.palette.secondary[100],
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary[100],
    cursor: "pointer",
  },
  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
    color: `${theme.palette.secondary[200]} !important`,
  },
}));

const Customers = () => {
  const { data, isLoading } = useGetCustomersQuery();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />

      <StyledDataGrid>
        <DataGrid
          isLoading={isLoading}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </StyledDataGrid>
    </Box>
  );
};

export default Customers;
