import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  FormControl,
  Icon,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import "../App.css";

const HomePage: React.FC = () => {
  const [projects, setProjects] = useState([
    {
      id: "91fe2af0-8ae1-459e-afa7-5fe516d765d9",
      project_name: "Ebert Inc",
      measurement: "imperial",
    },
    {
      id: "525bafa6-52db-4326-afd4-77986de431bc",
      project_name: "Reynolds-Durgan",
      measurement: "imperial",
    },
    {
      id: "68005788-1ca5-4364-a54f-7c4afdf3a7d1",
      project_name: "Kunze-Gleichner",
      measurement: "imperial",
    },
    {
      id: "1bdeae82-d17a-4755-b830-a15859b57d39",
      project_name: "MacGyver-McGlynn",
      measurement: "imperial",
    },
    {
      id: "e92ae5fe-1677-45af-be05-09ae6c5f0479",
      project_name: "Parisian, Daniel and Ortiz",
      measurement: "imperial",
    },
    {
      id: "df76ffea-db87-4ddc-8d83-90934f122bb5",
      project_name: "Rolfson Group",
      measurement: "imperial",
    },
    {
      id: "4e609199-ed5f-4cd4-a187-e351be53ae75",
      project_name: "Ryan, Fahey and Klein",
      measurement: "imperial",
    },
    {
      id: "c1291450-7242-4445-a6da-195ebb7e065e",
      project_name: "Kertzmann-Hirthe",
      measurement: "imperial",
    },
    {
      id: "5648d002-f3dd-48a8-9f3d-1e3cb8cfe8d1",
      project_name: "McKenzie, Reinger and Torp",
      measurement: "imperial",
    },
    {
      id: "58d47bc3-b7c0-42c8-986e-33ce1a54899d",
      project_name: "Rempel Inc",
      measurement: "imperial",
    },
    {
      id: "7e7a0129-fe70-44ad-8b18-ef7c2f03bbea",
      project_name: "Bahringer-Bednar",
      measurement: "imperial",
    },
    {
      id: "2596406b-9793-4d3c-a562-0a0c5aaf03c9",
      project_name: "Wolff, Harber and Harber",
      measurement: "metric",
    },
    {
      id: "7eb733aa-56a4-41a3-8dbe-6eac9e09c550",
      project_name: "Nitzsche, Gutkowski and Mosciski",
      measurement: "metric",
    },
    {
      id: "e600dec9-3bb3-4afd-89f9-1f603de711ae",
      project_name: "Kling, Beahan and Muller",
      measurement: "metric",
    },
    {
      id: "7ab0dd66-bc5f-4998-8a63-5452dfebf6e0",
      project_name: "Russel Inc",
      measurement: "metric",
    },
    {
      id: "871c61b8-9e6b-48f3-9972-92dfa74f946c",
      project_name: "Buckridge-Konopelski",
      measurement: "metric",
    },
    {
      id: "8cf1542d-b601-4d75-a73a-851d4139aea0",
      project_name: "Kessler, Erdman and Toy",
      measurement: "metric",
    },
    {
      id: "b343326c-13a3-4cf9-b3ce-0b4525432566",
      project_name: "Glover-Gutmann",
      measurement: "metric",
    },
    {
      id: "4cadeda2-4388-4a3e-8420-4d2b8eab2f03",
      project_name: "Mohr-Mayer",
      measurement: "metric",
    },
    {
      id: "52d92ff4-50d9-47ef-a43e-c734383dcd01",
      project_name: "Luettgen-Hegmann",
      measurement: "metric",
    },
  ]);
  const [formVisibility, setFormVisibility] = useState(false);
  return (
    <>
      <header>
        <button id="squares">
          <AppsIcon />
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            gap: "20px",
          }}>
          <SettingsIcon sx={{ color: "#397bf7" }} />
          <Avatar sx={{ bgcolor: "#397bf7" }}>M</Avatar>
        </div>
      </header>
      <main>
        <Button
          sx={{
            bgcolor: "#397bf719;",
            "&:hover": {
              bgcolor: "#397bf729;",
            },
          }}
          startIcon={<AddIcon />}
          onClick={() => setFormVisibility(true)}>
          New project
        </Button>
        <div style={{ flex: "1" }}>
          <Box sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}>
            <SearchIcon sx={{ color: "#397bf7", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Search"
              variant="standard"
              sx={{ width: "100%" }}
            />
          </Box>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Checkbox />
            <IconButton>
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <span style={{ marginLeft: "auto", color: "#397bf7" }}>
              {projects.length} items
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(3, 1fr)",
            }}>
            {projects.map((project) => (
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "200px",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <Checkbox />
                    <IconButton>
                      <MoreVertIcon sx={{ color: "#397bf7" }} />
                    </IconButton>
                  </div>
                  <span style={{ color: "#397bf7" }}>
                    {project.project_name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      {formVisibility && (
        <Dialog
          open={formVisibility}
          onClose={() => setFormVisibility(false)}
          slotProps={{
            paper: {
              component: "form",
              onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(
                  (formData as any).entries()
                );
                let newId;
                try {
                  newId = crypto.randomUUID();
                } catch (e: unknown) {
                  newId = String(Date.now());
                }
                const newObject = {
                  id: newId,
                  project_name: formJson.name,
                  measurement: formJson.measurement,
                };
                setProjects([...projects, newObject]);
                setFormVisibility(false);
              },
            },
          }}>
          <DialogTitle>New project</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              fullWidth
              variant="standard"
              placeholder="New project"
            />
            <FormControl fullWidth>
              <Select
                id="measurement"
                name="measurement"
                value="metric"
                label="Measurement system">
                <MenuItem value="imperial">Imperial</MenuItem>
                <MenuItem value="metric">Metric</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>setFormVisibility(false)}>Cancel</Button>
            <Button type="submit">Create</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default HomePage;
