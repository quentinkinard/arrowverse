import { useLocation } from "react-router";
import { Button } from "@mui/material";
import "./CastPage.css";
import { Grid } from "@mui/material";
const CastPage = () => {
  const location = useLocation();

  return (
    <div className="cmp">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={location.state.castMember.image.medium} alt="" />
        </Grid>
        {console.log(location.state.castMember)}
        <Grid className="memberInfo" item xs={6}>
          <div> {location.state.castMember.name}</div>
          <div>{location.state.castMember.country.name}</div>
          <div>{location.state.castMember.gender}</div>
          <div>{location.state.castMember.birthday}</div>
        <div>
          <Button variant="contained">Download</Button>
        </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CastPage;
