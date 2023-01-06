import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField,
} from "@mui/material";

const OrderHistory = () => {
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
      </Box>
    </Box>
  );
};

export default OrderHistory;
