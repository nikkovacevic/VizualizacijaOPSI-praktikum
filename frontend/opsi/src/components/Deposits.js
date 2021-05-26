import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Število migracij</Title>
      <Typography component="p" variant="h4">
        3,024 ljudij
      </Typography>
      <Typography color="#7B8C83" className={classes.depositContext}>
        on 25 Maj, 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Poglej podrobnosti
        </Link>
      </div>
    </React.Fragment>
  );
}