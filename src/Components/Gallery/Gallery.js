import { useState, useEffect } from "react";
import axios from "axios";
import { ImageList, ImageListItem } from "@mui/material";

const Gallery = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows/4/images")
      .then(function (response) {
        setImages(response.data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {images && (
        <ImageList sx={{ width: "100%", height: "80%" }} cols={3}>
          {images.map((image) => {
            return image.resolutions.medium?.url ? (
              <ImageListItem key={images.id}>
                <img
                  src={image.resolutions.medium?.url}
                  alt="arrow show images"
                  loading="lazy"
                />
              </ImageListItem>
            ) : null;
          })}
        </ImageList>
      )}
      {!images && <h2>No Gallery to Display</h2>}
    </div>
  );
};

export default Gallery;
