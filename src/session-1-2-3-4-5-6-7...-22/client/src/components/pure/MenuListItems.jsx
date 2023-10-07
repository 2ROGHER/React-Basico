import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { HomeIcon, SettingsIcon, Task } from "@mui/icons-material";

import React from "react";
import { useNavigate } from "react-router-dom";

const getIcon = (icon) => {
  switch (icon) {
    case "HOME":
      return <Home />;
    case "TASKS":
      return <Task />;
    case "SETTINGS":
      return <SettingsIcon />;
    case "HOME":
      return <Home />;
    default:
      return <Home />;
  }
};
const MenuListItems = ({ list }) => {
  const navigate = useNavigate();

  const navTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <List>
      {list.map(({text, path, icon}, index) => (
        <ListItem key={index} button onClick={() => navTo(path)}>
            <ListItemIcon>
                {getIcon(icon)}
            </ListItemIcon>
            <ListItemText primary={text}>
            </ListItemText>
        </ListItem>
      ))}
      </List>
    </div>
  );
};

export default MenuListItems;
