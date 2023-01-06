import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import RegisterProduct from "../RegisterProduct/RegisterProduct";
const AdminDashboard = () => {
  return (
    <Box
      className="page-style frequenlty-asked-question"
      sx={{ paddingTop: 20 }}
    >
      <Box sx={{ p: 10 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontFamily: "poppins", color: "#fff" }}
          >
            Register New Product
          </Typography>
          <Box sx={{ py: 4 }}>
            <input placeholder="Search" type="search" />
          </Box>
        </Box>
        <RegisterProduct />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
