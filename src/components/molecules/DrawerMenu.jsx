import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import Drawer from "@mui/material/Drawer";
import { ListItem } from "@mui/material";
import { currentUserContext } from "../../contexts/CurrenteUserContext";

export default function DrawerMenu(props) {
  const { currentUser } = useContext(currentUserContext);

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <list>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/users">Usuários</Link>
        </ListItem>
        <ListItem>
          <Link to={`/users/${currentUser}/post`}>Criar post</Link>
        </ListItem>
      </list>
    </Drawer>
  );
}
