import { Grid, makeStyles, Theme } from "@material-ui/core";
import Feed from "./components/feed/Feed";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Rightbar from "./components/rightbar/Rightbar";
import Sidebar from "./components/sidebar/Sidebar";

const useStyles = makeStyles((theme:Theme) =>({
  right:{
    [theme.breakpoints.down("sm")]:{
      dispaly:"none"
    }
  }
}));
function App() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Sidebar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed/>
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar/>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default App;
