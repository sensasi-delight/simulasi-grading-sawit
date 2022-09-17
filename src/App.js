import { useState } from 'react';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import red from '@mui/material/colors/red';

import Container from '@mui/material/Container';

import DisclaimerDialog from './components/DisclaimerDialog';
import Main from './pages/main/Index';
import Header from './components/Header';
import Footer from './components/Footer';
import Notification from './components/Notification';
import DonationDialog from './components/DonationDialog';


const THEME = createTheme({
  palette: {
    primary: {
      main: red['A700'],
    }
  },
});

function App() {
  const [notifications, setNotifications] = useState([])

  window.onmessage = (event) => {
    if (event.data.notification) {
      const notification = {
        id: event.data.messageId || Date.now(),
        text: event.data.notification.body || 'terjadi kesalahan',
        isShow: true,
        buttonText: event.data.data.buttonText,
        buttonUrl: event.data.data.buttonUrl
      }

      notifications.push(<Notification key={notification.id} data={notification} />)
      setNotifications([...notifications])
    }
  };

  return (
    <ThemeProvider theme={THEME}>
      <Container className="App" maxWidth="sm" >
        <Header />
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '1.5em' }}>
          <DisclaimerDialog />
          <DonationDialog />
        </div>
        <Main />
        <Footer />
        {notifications}
      </Container>
    </ThemeProvider>
  );
}

export default App;
