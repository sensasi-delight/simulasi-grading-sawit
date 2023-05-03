import { useState } from 'react';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import red from '@mui/material/colors/red';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import DisclaimerDialog from './components/DisclaimerDialog';
import Header from './components/Header';
import Footer from './components/Footer';
import Stepper from './components/Stepper.tsx';
import Notification from './components/Notification';
import DonationDialog from './components/DonationDialog';
import SavedCalculation from './components/SavedCalculation.tsx';
import Form from './components/Form';
import ResultBox from './components/ResultBox';

import vars from './helpers/vars.ts';
import { Fade } from '@mui/material';

const THEME = createTheme({
  palette: {
    primary: {
      main: red['A700'],
    }
  },
});

const INPUT_CODES = [
  ['BM', 'BLM',
    // 'TBK', // skipped because 100% cut
    'BMTG'],
  ['BGP',
    // 'JK', // skipped because 100% cut
    'BR',
    // 'BP', // skipped because 100% cut
    'PBB',
    'totalWeight'
    // 'BK' // skipped because 100% cut
  ]
];

function App() {
  vars.formValues = useState({});
  vars.activeStep = useState(0);

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

  const [isTextFieldErrors, setIsTextFieldErrors] = useState({});

  const getInvalidTextFieldIds = () => {
    return INPUT_CODES[vars.activeStep[0]].filter(inputId => vars.formValues[0][inputId] === '' || isNaN(vars.formValues[0][inputId]));
  }

  const hasErrors = () => {
    const invalidTextFieldIds = getInvalidTextFieldIds();
    return invalidTextFieldIds.length !== 0;
  }

  const isFormValuesValid = () => {
    const invalidTextFieldIds = getInvalidTextFieldIds();

    setIsTextFieldErrors(
      Object.fromEntries(invalidTextFieldIds.map(elementId => [elementId, true]))
    );

    if (!hasErrors()) {
      return true;
    }

    return false;
  }

  const handleNext = () => {
    if (isFormValuesValid()) {
      return vars.activeStep[1](vars.activeStep[0] + 1)
    }
  }

  const handlePrev = () => vars.activeStep[1](prev => prev - 1);

  return (
    <ThemeProvider theme={THEME}>
      <Container className="App" maxWidth="sm" >
        <Header />
        <Box display='flex' justifyContent='space-between'>
          <Box>
            <SavedCalculation />
          </Box>
          <Box display='flex' alignItems='center'>
            <DisclaimerDialog />
            <DonationDialog />
          </Box>
        </Box>

        <Box>
          {
            vars.activeStep[0] === 0 && <Fade in={vars.activeStep[0] === 0}>
              <Box>
                <Form
                  inputCodes={INPUT_CODES[0]}
                  handleNext={handleNext}
                  values={vars.formValues[0]}
                  isErrors={isTextFieldErrors}
                />
              </Box>
            </Fade>
          }

          {
            vars.activeStep[0] === 1 && <Fade in={vars.activeStep[0] === 1}>
              <Box>
                <Form
                  inputCodes={INPUT_CODES[1]}
                  handleNext={handleNext}
                  values={vars.formValues[0]}
                  isErrors={isTextFieldErrors}
                />
              </Box>

            </Fade>
          }

          {
            vars.activeStep[0] === 2 && <Fade in={vars.activeStep[0] === 2}>
              <Box>
                <ResultBox />
              </Box>
            </Fade>
          }

          <Stepper activeStep={vars.activeStep[0]} handleNext={handleNext} handlePrev={handlePrev} />
        </Box>

        <Footer />
        {notifications}

      </Container>
    </ThemeProvider>
  );
}

export default App;
