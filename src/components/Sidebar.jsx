import React from "react";
import { Stack } from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
const customOptions = [
  { name: 'GB SoundCloud', icon: <MusicNoteIcon />, },
  { name: "SHINA SONG", icon: <MusicNoteIcon />, },
  { name: "WAKHI SONG", icon: <MusicNoteIcon />, },
  { name: "KHUWAR SONG", icon: <MusicNoteIcon />, },
  { name: "BALTI SONG", icon: <MusicNoteIcon />, },
  { name: "URDU SONG", icon: <MusicNoteIcon />, },
];

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {customOptions.map((option) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(option.name)}
        style={{
          background: option.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={option.name}
      >
        <span style={{ color: option.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {option.icon}
        </span>
        <span style={{ opacity: option.name === selectedCategory ? "1" : "0.8" }}>
          {option.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;