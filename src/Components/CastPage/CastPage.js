import { useLocation } from "react-router";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { CSVLink } from "react-csv";

import "./CastPage.css";


const headers = [
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Birthday",
    key: "birthday",
  },
  {
    label: "Gender",
    key: "gender",
  },
  {
    label: "Country",
    key: "country.name",
  },
];

const CastPage = () => {
  const location = useLocation();
  const castMember = location.state.castMember;

  return (
    <div className="cmp">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={castMember.image.medium} alt="" />
        </Grid>
        <Grid className="memberInfo" item xs={6}>
          <div>
            <b>Name:</b> {castMember.name}
          </div>
          <div>
            <b>Country:</b> {castMember.country.name}
          </div>
          <div>
            <b>Gender:</b> {castMember.gender}
          </div>
          <div>
            <b>Birthday:</b> {castMember.birthday}
          </div>
          <br />
          <div>
            <CSVLink
              data={[castMember]}
              headers={headers}
              filename={`${castMember.name} info`}
            >
              <Button className="btn">Download Me</Button>
            </CSVLink>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CastPage;
