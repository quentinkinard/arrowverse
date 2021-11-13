import React from "react";
import { useHistory } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import "./MainPage.css";

const MainPage = ({ show, cast }) => {
  const history = useHistory();

  return (
    <div>
      {show && (
        <div>
          {show.name}
          {console.log(show)}
          <div>
            <img src={show.image.medium} alt="" />
          </div>
          <div>{show.type}</div>
          <div>{show.premiered}</div>
          <div>{show.ended}</div>
          <div>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
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
                    })
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
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="inherit"
                        >
                          {castMember.character.name}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
