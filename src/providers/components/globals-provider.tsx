import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from 'react'

const DEFAULT_GLOBAL_VARIABLES: {
    activeStep: number
    setActiveStep: Dispatch<SetStateAction<number>>

    formValues: Record<string, any>
    setFormValues: Dispatch<SetStateAction<Record<string, any>>>
} = {
    activeStep: 0,
    setActiveStep: () => {},

    formValues: {},
    setFormValues: () => {},
}

const CONTEXT = createContext(DEFAULT_GLOBAL_VARIABLES)

export function GlobalsProvider({ children }: { children: ReactNode }) {
    const [activeStep, setActiveStep] = useState(0)
    const [formValues, setFormValues] = useState({})

    return (
        <CONTEXT.Provider
            value={{
                activeStep,
                setActiveStep,

                formValues,
                setFormValues,
            }}>
            {children}
        </CONTEXT.Provider>
    )
}

export function useGlobals() {
    return useContext(CONTEXT)
}
