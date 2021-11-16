import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

import "./Episode.css";

const Episodes = () => {
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows/4/episodes")
      .then(function (response) {
        setEpisodes(response.data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  const columns = [
    { field: "name", headerName: "Episode Name", width: 200 },
    { field: "season", headerName: "Season Number", width: 200 },
    { field: "number", headerName: "Episode Number", width: 200 },
    { field: "airdate", headerName: "Original Airdate", width: 200 },
  ];

  return (
    <div className="episodesMain">
      {episodes && (
        <div className="dataGridMain">
          <DataGrid
            key={episodes.id}
            style={{ color: "whitesmoke" }}
            rows={episodes}
            columns={columns}
            pageSize={25}
            rowsPerPageOptions={[25]}
            disableColumnSelector
          />
        </div>
      )}
    </div>
  );
};

export default Episodes;
