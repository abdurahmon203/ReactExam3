import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api, ImageApi } from "../config/api";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  Box,
  Modal,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import StatusIcon from "@mui/icons-material/Check";
import StatusIcon2 from "@mui/icons-material/Clear";
import { useFormik } from "formik";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 12,
  p: 4,
};

const Users = () => {
  const [data, setData] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const GetData = async () => {
    try {
      const { data } = await axios.get(Api);
      setData(data.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const validationSchema = Yup.object({
    Name: Yup.string().required("Name is required"),
    Description: Yup.string().required("Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      Name: "",
      Description: "",
      Images: null,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("name", values.Name);
      formData.append("description", values.Description);
      if (values.Images) formData.append("Images", values.Images);

      try {
        await axios.post(Api, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        GetData();
        resetForm();
        setOpenAdd(false);
      } catch (error) {
        console.error("Create Error:", error);
      }
    },
  });

  const handleFileChange = (e) => {
    const file = e.currentTarget.files[0];
    if (file) formik.setFieldValue("Images", file);
  };

  const formikEdit = useFormik({
    initialValues: {
      Name: "",
      Description: "",
    },
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.put(Api, {
          id: editId,
          name: values.Name,
          description: values.Description,
        });
        GetData();
        resetForm();
        setOpenEdit(false);
      } catch (error) {
        console.error("Update Error:", error);
      }
    },
  });

  const handleFileChangeEdit = (e) => {
    const file = e.currentTarget.files[0];
  };

  const openEditModal = (user) => {
    formikEdit.setValues({
      Name: user.name || "",
      Description: user.description || "",
    });
    setEditId(user.id);
    setOpenEdit(true);
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`${Api}?id=${id}`);
      GetData();
      setOpenDelete(false);
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  const editData = async (id) => {
    try {
      await axios.put(`https://to-dos-api.softclub.tj/completed?id=${id}`);
      GetData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Button
        variant="contained"
        sx={{ mb: 3, mt: -20 }}
        onClick={() => setOpenAdd(true)}
      >
        ➕ Add New
      </Button>

      <Modal open={openAdd} onClose={() => setOpenAdd(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" mb={2}>
            Add New User
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="Name"
              margin="normal"
              value={formik.values.Name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Name && Boolean(formik.errors.Name)}
              helperText={formik.touched.Name && formik.errors.Name}
            />

            <TextField
              fullWidth
              label="Description"
              name="Description"
              margin="normal"
              value={formik.values.Description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.Description && Boolean(formik.errors.Description)
              }
              helperText={
                formik.touched.Description && formik.errors.Description
              }
            />

            <Button
              component="label"
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
            >
              Upload Image
              <input hidden type="file" onChange={handleFileChange} />
            </Button>

            <Box textAlign="right" mt={3}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" mb={2}>
            Edit User
          </Typography>
          <form onSubmit={formikEdit.handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="Name"
              margin="normal"
              value={formikEdit.values.Name}
              onChange={formikEdit.handleChange}
            />
            <TextField
              fullWidth
              label="Description"
              name="Description"
              margin="normal"
              value={formikEdit.values.Description}
              onChange={formikEdit.handleChange}
            />
            <Box textAlign="right" mt={3}>
              <Button type="submit" variant="contained">
                Update
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
        <Box sx={{ ...modalStyle, width: 440 }}>
          <Typography variant="h5" color="error" gutterBottom>
            Are you sure you want to delete this user?
          </Typography>
          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteData(deleteId)}
            >
              Delete
            </Button>
            <Button variant="outlined" onClick={() => setOpenDelete(false)}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>

      <Box
        className="md:ml-[0px] ml-[-65px] "
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={3}
      >
        {data.map((user) => (
          <Card
            key={user.id}
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              "&:hover": {
                boxShadow: 6,
                transform: "translateY(-4px)",
                transition: "0.3s",
              },
            }}
          >
            <CardContent>
              <Link
                to={`/user/${user.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography variant="h6">{user.name}</Typography>
              </Link>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {user.description}
              </Typography>

              {user.images?.[0]?.imageName && (
                <Box mb={2}>
                  <img
                    src={`${ImageApi}/${user.images[0].imageName}`}
                    alt="User"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              )}

              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="flex-end" gap={1}>
                <Button
                  size="small"
                  color="error"
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    setDeleteId(user.id);
                    setOpenDelete(true);
                  }}
                >
                  Delete
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={() => openEditModal(user)}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => editData(user.id)}
                  color={user.isCompleted == true ? "success" : "error"}
                  startIcon={
                    user.isCompleted == true ? <StatusIcon /> : <StatusIcon2 />
                  }
                >
                  {user.isCompleted == true ? "Active" : "Inactive"}
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Users;
