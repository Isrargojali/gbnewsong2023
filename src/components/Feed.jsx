import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }, marginRight: { sx: 0, md: 4 }  }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2023 GB SoundCloud
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }} marginLeft={"10.5%"}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
      {/* <Box borderLeft={2} color={"gray"}>
        <Typography variant="p" sx={{ color: "white" }}>Ads will be here</Typography> <br/>
        <Typography variant="p" sx={{ color: "white" }}>Ad Service Coming Soon!</Typography>
      </Box> */}
    </Stack>
  );
};

export default Feed;
