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
          <Grid item xs={7}>
            <header>
              <h1>{show.name}</h1>
            </header>
            <div>
              <img src={show.image.medium} alt="" />
              <div className="desp">Show Type: {show.type}</div>
              <div className="desp">Start Date: {show.premiered}</div>
              <div className="desp">Last Aired: {show.ended}</div>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="castMembersList">
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
