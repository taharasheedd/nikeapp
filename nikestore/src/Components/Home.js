import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    
    <div >
      <h1>Flash Sale Started Now !!</h1>   
   

<div className={classes.root} styles={{allign: 'center'}}>
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
<Paper elevation={8} />
</div>
</div>
  );
}
