import React from "react";
import { Stack } from "@mui/material";
import gbSoundCloudIcon from "./assets/gb-soundcloud.png";
import urduSongsIcon from "./assets/urdu.png";
import shinaSongsIcon from "./assets/shina.png";
import brushaskiSongsIcon from "./assets/brushaski.png";
import wakhiSongsIcon from "./assets/wakhi.png";
import khuwarSongsIcon from "./assets/khuwar.png";
import baltistaniSongsIcon from "./assets/balti.png";

const customOptions = [
  { name: 'GB SoundCloud', icon: <img style={{width: "40px"}} src={gbSoundCloudIcon} alt="GB SoundCloud" />, },
  { name: "URDU SONGS", icon: <img style={{width: "40px"}} src={urduSongsIcon} alt="Urdu Songs" />, },
  { name: "SHINA SONGS", icon: <img style={{width: "40px"}} src={shinaSongsIcon} alt="Shina Songs" />, },
  { name: "BRUSHASKI SONGS", icon: <img style={{width: "40px"}} src={brushaskiSongsIcon} alt="Brushaski Songs" />, },
  { name: "WAKHI SONGS", icon: <img style={{width: "40px"}} src={wakhiSongsIcon} alt="Wakhi Songs" />, },
  { name: "KHUWAR SONGS", icon: <img style={{width: "40px"}} src={khuwarSongsIcon} alt="Khuwar Songs" />, },
  { name: "BALTISTANI SONGS", icon: <img style={{width: "40px"}} src={baltistaniSongsIcon} alt="Baltistani Songs" />, },
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