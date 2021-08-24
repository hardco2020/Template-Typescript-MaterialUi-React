import {
  Container,
  Typography,
  Theme,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { Home,WbSunny,StarBorder,EventNote,Person,Add} from "@material-ui/icons";

export interface StyleProps {}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    container: {
      height: "100vh",
      color: "white",
      paddingTop: theme.spacing(10),
      backgroundColor: "#f4f4f4",
      [theme.breakpoints.up("sm")]: {
        backgroundColor:"#f4f4f4",
        color:"#555",
        border:"1px solid #ece7e7"
      },
    },
    item: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(3),
        cursor: "pointer",
      },
    },
    icon:{
        marginRight:theme.spacing(1),
        [theme.breakpoints.up("sm")]:{
            fontSize: "18px"
        }
    },
    text:{
      fontWeight:500,
      [theme.breakpoints.down("sm")]: {
          display:"none"
      }
    }
  })
);

export default function Sidebar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <WbSunny className={classes.icon} />
        <Typography className={classes.text}>我的一天</Typography>
      </div>
      <div className={classes.item}>
        <StarBorder className={classes.icon} />
        <Typography className={classes.text}>重要</Typography>
      </div>
      <div className={classes.item}>
        <EventNote className={classes.icon} />
        <Typography className={classes.text}>已計劃</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>指派給您</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>工作</Typography>
      </div>
      <div className={classes.item}>
        <Add className={classes.icon} />
        <Typography className={classes.text} style={{color:"blue"}}>新增清單</Typography>
      </div>
    </Container>
  );
}
