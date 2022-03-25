import './styles/style.css';
import './styles/flexbox.css';
import './styles/reset.css';

import useStyles from './styles/home.styles';

import {
	createTheme,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
	Drawer,
	Box,
	List,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Grid,
	Hidden,
} from '@material-ui/core';


export default function Home() {
  const classes = useStyles();

  return (
    <div className="App">
		<h1>Hello Word</h1>
    </div>
  );
}