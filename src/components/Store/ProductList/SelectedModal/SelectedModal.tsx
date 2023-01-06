import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import dummyImage from "../../../../assets/images/items/shirts/shirt2.png";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import CustomButton from "../../../../UI/CommonButton/CustomButton";
import "./SelectedModal.scss";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectedModal(props: any) {
  const [size, setSize] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const selectedItemtoProp = props.selectedItemprop ?? props.selectedItemprop;
  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  return (
    <Box className="selected-modal">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              width: "400px",
              height: "400px",
              justifyContent: "center",
              overflow: "hidden",
              alignItems: "center",
            }}
          >
            <img
              src={selectedItemtoProp.img}
              alt=""
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Box sx={{ py: 1 }}>
              <Typography variant="h5" sx={{ fontFamily: "poppins" }}>
                {selectedItemtoProp.name}
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "poppins", py: 1 }}>
                Price <span> ${selectedItemtoProp.price}</span>
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ fontFamily: "poppins", pb: 1 }}>
                Total Rating
              </Typography>
              <Rating
                name="read-only"
                value={selectedItemtoProp.rating}
                readOnly
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
                py: 1,
              }}
            >
              <Box sx={{ minWidth: "50%" }}>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "poppins", py: 1 }}
                >
                  Select Size
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Size
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Select Size"
                    onChange={handleChange}
                    sx={{ p: 0 }}
                  >
                    {selectedItemtoProp.size ? (
                      selectedItemtoProp.size.map((item: any) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))
                    ) : (
                      <Box sx={{ textAlign: "center" }}>no size available</Box>
                    )}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: "50%", pl: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "poppins", py: 1 }}
                >
                  Quantity
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    sx={{
                      fontSize: 25,
                      fontFamily: "poppins",
                      color: "#154128",
                    }}
                    onClick={() =>
                      quantity > 1
                        ? setQuantity(quantity - 1)
                        : setQuantity(quantity)
                    }
                  >
                    -
                  </Button>

                  <Typography sx={{ fontFamily: "poppins" }}>
                    {quantity}
                  </Typography>
                  <Button
                    sx={{
                      fontSize: 25,
                      fontFamily: "poppins",
                      color: "#154128",
                    }}
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "poppins",
                  py: 1,
                  "& span": {
                    pl: 1,
                    fontWeight: 600,
                  },
                }}
              >
                Selected Size: <span>{size ? size : "no Size Selected"}</span>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "poppins",
                  py: 1,
                  "& span": {
                    pl: 1,
                    fontWeight: 600,
                  },
                }}
              >
                Total Quantity: <span>{quantity}</span>
              </Typography>
            </Box>
            <Box sx={{ py: 1, display: "flex", justifyContent: "end" }}>
              <CustomButton name="Add To Cart" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
