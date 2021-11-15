import React from "react";
import { useHistory } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Grid,
} from "@mui/material";

import "./MainPage.css";

const MainPage = ({ show, cast }) => {
  const history = useHistory();

  return (
    <div className="main">
      {show && (
        <Grid container spacing={4}>
          <Grid item xs={7} style={{textAlign: 'center'}}>
            <h1>{show.name}</h1>
            <div>
              <img src={show.image.medium} alt="" />
              <div className="desp">
                <b>Show Type</b>: {show.type}
              </div>
              <div className="desp">
                <b>Start Date</b>: {show.premiered}
              </div>
              <div className="desp">
                <b>Last Aired</b>: {show.ended}
              </div>
              <div >
                <h4>Show Summary</h4>
                <p>
                  {show.summary.replace(new RegExp('<[^>]*>', 'g'), '')}
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="castMembersList">
                <h3>Cast Members</h3>
              <List className="cml">
                {cast.map((castMember) => (
                  <ListItem
                    alignItems="flex-start"
                    className="castMember"
                    onClick={() => {
                      history.push({
                        pathname: "/cast",
                        state: {
                          castMember: castMember.person,
                        },
                      });
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={castMember.name}
                        src={castMember.person.image.medium}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={castMember.person.name}
                      secondary={
                        <React.Fragment>
                          <Typography className="typo">
                            {castMember.character.name}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default MainPage;
