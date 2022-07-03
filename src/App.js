// React

// Material UI
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import red from '@mui/material/colors/red';

// Material Icon
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';

// My Components
import Main from './Main';
import DisclaimerDialog from './components/DisclaimerDialog';




// ON DEVELOPMENT
// import { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import Toolbar from '@mui/material/Toolbar';
// import MenuIcon from '@mui/icons-material/Menu'
// import Navbar from './components/Navbar';



const theme = createTheme({
	palette: {
		primary: {
			main: red['A700'],
		}
	},
});


function App() {
	// const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	// const handleDrawerOpen = () => {
	// 	setIsDrawerOpen(true)
	// }

	return (

		<div className="App">
			<ThemeProvider theme={theme}>
				<Container
					component="main"
					maxWidth="sm"
				>
					<Box
						maxWidth="xs"
						component="header"
						sx={{
							marginTop: 8,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',

						}}
					>
						{/* <AppBar
							color='transparent'
							elevation={0}
						>
							<Toolbar variant='dense'>
								<Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">

								</Typography>
								<IconButton
									color="inherit"
									aria-label="open drawer"
									edge="end"
									onClick={handleDrawerOpen}
								// sx={{ ...(open && { display: 'none' }) }}
								>
									<MenuIcon />
								</IconButton>
							</Toolbar>
						</AppBar> */}

						{/* <Navbar isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} /> */}


						<Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
							<PercentOutlinedIcon fontSize='large' />
						</Avatar>
						<Typography mt={2} component="h1" variant="h4" align="center">
							Simulasi Grading Sawit
						</Typography>
					</Box>

					<DisclaimerDialog />

					<Main />


					<Typography sx={{ mt: 4, mb: 4 }} component='footer' variant="body2" color="text.secondary" align="center" >
						{'Copyright © '}
						<Link color="inherit" href="https://github.com/sensasi-apps">
							Sensasi Apps
						</Link>{' '}
						{new Date().getFullYear()}
						{'.'}
					</Typography>

				</Container>
			</ThemeProvider>
		</div>

	);
}

export default App;
