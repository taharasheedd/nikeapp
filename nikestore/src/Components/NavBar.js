import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
<AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAD09PTu7u7V1dX39/ezs7Nvb2/8/Pyrq6vFxcXo6Og5OTnl5eXf39/i4uLQ0NC5ubmamppAQEBZWVmRkZEvLy9ISEjKysq/v7+BgYF5eXkbGxtra2tPT0+MjIxjY2MREREmJiafn58eHh58fHxEREQ0NDSFhYVMTExdXV109a35AAAECklEQVR4nO3b6VrqMBAGYNM9tECLbLVAWUTR+7/AU9BToXuS6aLP9/7vZMZAJknl6QkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGTOs7gbYZYd8ZCHBN8WfWHn0e7dCCC3fFHwvYhD4Xenp4OXiWzJMWs6mTITcOX54Zi+RmImADn8JxGCXVMc+SXA7D5E9DmxEl3Tpv2JVtyIZICmRTypzIOK51Pt6qYx6X72ZG8vycMC0qE8v22DfbVwikXyOsyfKiMbW2S5aa6SqxtOun4JUqMwLOmG/Znd1IMd7u9keiSU6ZOeH25r68Y6y8QNi3QGOK9FQZfL9kD3aBxOYsg98ifRDkp8bg8wPLOFO0aP8rVkwQSpo5Oe2zxTH2zB2K4Pr3Z15lKVaiGbN9bu4SEVVGu694B6XFWJp/2r0WVMeOJ7KTavz/E0EVsDHHn62Kikt8ErZm/3/Qbo8Vur+Yl1THlguJg18pM12au+uGuh+XVpdsHUOS1SV1TiMHpHHLOKPFc3l1yYJO3ZTDn9iK26IGtNFiWV5b4k3q3F7JvAvfboXu6PJRWR07RNIHvwpRJxXqo5eyNTP1rnDwq2Dcj9FSheuFV1bVj21bu423+1E4eXhzMqtYM1NLtYNfFf4w0Att8AnfFu5VsvYj2uZwT3scakUX2Q3s6kUzRdrbc6LHwYj2pWZ42RRXk7NquQW72QHVx0s2KzUt4cfmpfW72W12TLWbNseY5Y+v5dMne6krYJIfVr7jTgsO5xXkL3VF2PmBpc5Pjm5F+VAVllz92qWJcdHgwi3RHZ0b9PN7287uZOPC8UW2FuY6fisMUm7TXm/PcUpyaPoFMU6VZ6BCqpe6YnhZGvVZFN+K1SG41BVT/u1ZVD43seyjeHkkl7piClpFyiubRjeIGu7FMtrv7XmLyoy8INuOHYOLtYS7YDSXuqJql4ndhRvTseuOp4YVR7Xn11JKb/wUTKUzFnI89XPJ/FSxklKivNQVVrBjI3Zc9DZ9V47cktgc9aWuMK0+RxWX/v8px6jPUppHf6ElwWqtvm4OfvVO7ZT33l9zyJq1UV+vzSGres8mY9Nvc8ihnsPem0MObYUDaA45hGvp0hra9N1UnQ6FDKU55Jj1uTfgDac55Encs2Tth9Qc8lS/iENrDnlmozd7Zea/4UcnCv1iiM2hiMyVYOLd6vpWUJpUwxhscygUiJY36OZQSOw2qrtXRoT8+rq+dfnKiJTerPEP6uAnKqx9Afhp/dLpS613FeXt+W8v70bjq0NBdV7c6fvMlpnGabtL9wDHD5v7f2LyMjR36odrY+r++R9zAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKF/SnYuo+nR1UUAAAAASUVORK5CYII=" width="50" height="40"></img>
          </IconButton>
          <Typography variant="h6" className={classes.title} style={{color: 'black'}}>
          <Link to='/' style={{color: 'black'}}>Home   </Link>
          </Typography>
          <Typography variant="h6" className={classes.title} style={{color: 'black'}}>
          <Link to='/product' style={{color: 'black'}}> Products   </Link>
          </Typography>
          <Typography variant="h6" className={classes.title} style={{color: 'black'}}>
          <Link to='/about' style={{color: 'black'}}>Contact   </Link>
          </Typography>
        


        </Toolbar>
      </AppBar>


    </div>
  );
}
