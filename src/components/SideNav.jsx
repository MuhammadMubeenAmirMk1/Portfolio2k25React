import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 200;

function SideNav() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  if (isMobile) return null;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: drawerWidth },
      }}
    >
      <List>
        {["Home", "Education", "Projects", "Contact"].map((text) => (
          <ListItem
            button
            key={text}
            onClick={() => navigate(text.toLowerCase())}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideNav;
