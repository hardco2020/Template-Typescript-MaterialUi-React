import { makeStyles,createStyles,Theme, Container} from '@material-ui/core';
import React from 'react'

export interface StyleProps {}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(10),
    },
  })
);

export default function Rightbar() {
    const classes = useStyles()
    
    return (
        <Container className={classes.container}>
            rightbar
        </Container>
    )
}
