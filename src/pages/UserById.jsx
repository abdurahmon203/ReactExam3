import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api, ImageApi } from "../config/api";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  CircularProgress,
  Paper,
} from "@mui/material";

const UserById = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const GetData = async () => {
    try {
      const { data } = await axios.get(`${Api}/${id}`);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  if (!data) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Card
        variant="outlined"
        className="w-[300px] md:w-[1050px] "
        sx={{
          p: 4,
          borderRadius: 3,
          boxShadow: 6,
          backgroundColor: "#f9f9f9",
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            👤 {data.name}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {data.description}
          </Typography>

          <Typography variant="subtitle1" fontWeight={500} gutterBottom>
            📷 Uploaded Images:
          </Typography>

          <Box
            mt={2}
            display="flex"
            flexWrap="wrap"
            gap={2}
            justifyContent={{ sm:"center", md: "flex-start" }}
          >
            {data.images && data.images.length > 0 ? (
              data.images.map((image) => (
                <Paper
                  key={image.id}
                  elevation={3}
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <img
                    src={`${ImageApi}/${image.imageName}`}
                    alt="User"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Paper>
              ))
            ) : (
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  border: "1px dashed #bbb",
                  borderRadius: 2,
                  bgcolor: "#fff",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  🚫 No images found for this user.
                </Typography>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserById;
