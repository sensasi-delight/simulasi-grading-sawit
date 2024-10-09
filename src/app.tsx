// vendors
import { useState } from 'react'
import { Box, Container, Fade } from '@mui/material'
// components
import DonationDialog from './components/donation-dialog'
import DisclaimerDialog from './components/disclaimer-dialog'
import Footer from './components/footer'
import Form from './components/form'
import Header from './components/header'
import ResultBox from './components/result-box'
import Stepper from './components/stepper'
import SavedCalculation from './components/saved-calculation'
// import Notification from './components/Notification';

import { useGlobals } from './hooks/use-globals'

const INPUT_CODES = [
    [
        'BM',
        'BLM',
        // 'TBK', // skipped because 100% cut
        'BMTG',
    ],
    [
        'BGP',
        // 'JK', // skipped because 100% cut
        'BR',
        // 'BP', // skipped because 100% cut
        'BK',
        'PBB',
        'totalWeight',
    ],
]

export default function App() {
    const { activeStep, setActiveStep, formValues } = useGlobals()

    //   const [notifications, setNotifications] = useState([])

    //   window.onmessage = (event) => {
    //     if (event.data.notification) {
    //       const notification = {
    //         id: event.data.messageId || Date.now(),
    //         text: event.data.notification.body || 'terjadi kesalahan',
    //         isShow: true,
    //         buttonText: event.data.data.buttonText,
    //         buttonUrl: event.data.data.buttonUrl
    //       }

    //       notifications.push(<Notification key={notification.id} data={notification} />)
    //       setNotifications([...notifications])
    //     }
    //   };

    const [isTextFieldErrors, setIsTextFieldErrors] = useState({})

    const getInvalidTextFieldIds = () => {
        return INPUT_CODES[activeStep].filter(
            inputId => formValues[inputId] === '' || isNaN(formValues[inputId]),
        )
    }

    const hasErrors = () => {
        const invalidTextFieldIds = getInvalidTextFieldIds()
        return invalidTextFieldIds.length !== 0
    }

    const isFormValuesValid = () => {
        const invalidTextFieldIds = getInvalidTextFieldIds()

        setIsTextFieldErrors(
            Object.fromEntries(
                invalidTextFieldIds.map(elementId => [elementId, true]),
            ),
        )

        if (!hasErrors()) {
            return true
        }

        return false
    }

    const handleNext = () => {
        if (isFormValuesValid()) {
            return setActiveStep(prev => prev + 1)
        }
    }

    const handlePrev = () => setActiveStep((prev: number) => prev - 1)

    return (
        <Container maxWidth="sm">
            <Header />

            <Box display="flex" justifyContent="space-between">
                <Box>
                    <SavedCalculation />
                </Box>

                <Box display="flex" alignItems="center">
                    <DisclaimerDialog />

                    <DonationDialog />
                </Box>
            </Box>

            <Box>
                <Fade
                    in={activeStep === 0}
                    timeout={{
                        enter: 500,
                        exit: 0,
                    }}
                    unmountOnExit>
                    <Box>
                        <Form
                            inputCodes={INPUT_CODES[0]}
                            handleNext={handleNext}
                            values={formValues}
                            isErrors={isTextFieldErrors}
                        />
                    </Box>
                </Fade>

                <Fade
                    in={activeStep === 1}
                    timeout={{
                        enter: 500,
                        exit: 0,
                    }}
                    unmountOnExit>
                    <Box>
                        <Form
                            inputCodes={INPUT_CODES[1]}
                            handleNext={handleNext}
                            values={formValues}
                            isErrors={isTextFieldErrors}
                        />
                    </Box>
                </Fade>

                <Fade
                    in={activeStep === 2}
                    timeout={{
                        enter: 500,
                        exit: 0,
                    }}
                    unmountOnExit>
                    <Box>
                        <ResultBox />
                    </Box>
                </Fade>
            </Box>

            <Stepper
                activeStep={activeStep}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />

            <Footer />
            {/* {notifications}  */}
        </Container>
    )
}
