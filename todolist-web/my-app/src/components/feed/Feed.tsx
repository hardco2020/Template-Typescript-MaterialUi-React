import {
  makeStyles,
  Theme,
  Container,
  createStyles,
  Typography,
  ListItem,
  ListItemText,
  Divider,
  List,
  Input,
} from "@material-ui/core";
import { WbSunny } from "@material-ui/icons";
import React from "react";

export interface StyleProps {}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(10),
    },
    loginbg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      },
      alignItems: "center",
    },

    loginsm: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);
export default function Feed() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h5" className={classes.loginbg}>
        <WbSunny className={classes.icon} />
        我的一天
      </Typography>
      <List
        component="nav"
        aria-label="mailbox folders"
      >
        <ListItem button>
          <Input/>
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </Container>
  );
}
