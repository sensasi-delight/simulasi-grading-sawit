// vendors
import { useRef, useState, useEffect } from 'react'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import dayjs from 'dayjs'
// icons
import { Save as SaveIcon } from '@mui/icons-material'
// helpers
import { currencyFormat, numberFormat } from '../../helpers'
import calculatePalmGrade from '../../helpers/calculate-palm-grade'
// components
import DetailDialog from './components/detail-dialog'
import SummaryTable from './components/summary-table'
import TextField from '../text-field'
// hooks
import useGlobals from '../../hooks/use-globals'
import useFirebase from '../../hooks/use-firebase'
// functions
import { getSavedDatasets } from '../../functions/get-saved-datasets'

let calculationResults: AnuType[] = []

export default function ResultBox() {
    const { logEvent } = useFirebase()
    const { formValues: dataset, setFormValues, setActiveStep } = useGlobals()

    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const [summaryData, setSummaryData] = useState<TypeB[]>([])
    const [pricePerKg, setPricePerKg] = useState(dataset.pricePerKg || '')

    const detailBtnRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        setPricePerKg(dataset.pricePerKg || '')
    }, [dataset.savedAt, dataset.pricePerKg])

    const isSaveDisabled =
        !pricePerKg ||
        JSON.stringify(dataset) ===
            JSON.stringify(
                getSavedDatasets().find(
                    data => data.savedAt === dataset.savedAt,
                ),
            )

    function handleSave() {
        const savedDatasets = getSavedDatasets()

        if (dataset.savedAt) {
            const delIndex = savedDatasets.findIndex(
                data => data.savedAt === dataset.savedAt,
            )
            savedDatasets.splice(delIndex, 1)
        }

        dataset.savedAt = dayjs().format()
        dataset.finalWeight =
            summaryData[0]?.weight -
            summaryData[1]?.weight +
            summaryData[2]?.weight
        dataset.finalWorth =
            summaryData[0]?.worth -
            summaryData[1]?.worth +
            summaryData[2]?.worth

        setFormValues({ ...dataset })
        savedDatasets.push({ ...dataset } as any)

        localStorage.setItem('savedDatasets', JSON.stringify(savedDatasets))
    }

    function handlePriceChange(value: number) {
        setPricePerKg(value)
        setFormValues(prev => {
            const newValues = {
                ...prev,
                pricePerKg: value,
            }

            calculationResults = calculatePalmGrade(newValues)
            setSummaryData(getSummaryData(calculationResults, newValues))

            return newValues
        })
    }

    return (
        <>
            <Box
                component="form"
                onSubmit={e => {
                    e.preventDefault()
                    return detailBtnRef.current?.focus()
                }}>
                <TextField
                    code="price"
                    onValueChange={handlePriceChange}
                    value={pricePerKg}
                    onBlur={() => logEvent('enter_price')}
                />

                <Button type="submit" sx={{ display: 'none' }}></Button>
            </Box>

            <SummaryTable dataset={summaryData} />

            <Box justifyContent="space-between" display="flex" mt={6}>
                <Box>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setActiveStep(0)
                            setFormValues({})
                            logEvent('click_reset')
                        }}>
                        Ulangi
                    </Button>
                </Box>

                <Box gap={2} display="flex" alignItems="center">
                    <Tooltip title="Simpan hasil perhitungan" placement="top">
                        <span>
                            <IconButton
                                color="primary"
                                disabled={isSaveDisabled}
                                onClick={handleSave}>
                                <SaveIcon />
                            </IconButton>
                        </span>
                    </Tooltip>

                    <Button
                        ref={detailBtnRef}
                        disabled={!pricePerKg}
                        variant="contained"
                        onClick={() => {
                            setIsDetailOpen(true)
                            logEvent('click_detail_cuts')
                        }}>
                        Rincian
                    </Button>
                </Box>
            </Box>

            <DetailDialog
                isOpen={isDetailOpen}
                setIsOpen={setIsDetailOpen}
                dataset={calculationResults}
            />
        </>
    )
}

function getSummaryData(detailsCalculation: AnuType[], dataset: any) {
    const summaryDataset: TypeB[] = [
        {
            name: 'Tandan Buah Segar',
            weight: dataset.totalWeight,
            worth: dataset.totalWeight * dataset.pricePerKg,
            tooltip: `${numberFormat(dataset.totalWeight)} × ${currencyFormat(
                dataset.pricePerKg,
            )}`,
        },
    ]

    const { totalCutWorth, totalAddWorth } = detailsCalculation.reduce(
        (acc, detail) => ({
            totalCutWorth: acc.totalCutWorth + detail.cutWorth,
            totalAddWorth: acc.totalAddWorth + detail.addWorth,
        }),
        {
            totalCutWorth: 0,
            totalAddWorth: 0,
        },
    )

    summaryDataset.push({
        name: 'Potongan',
        weight: totalCutWorth / dataset.pricePerKg,
        worth: totalCutWorth,
    })

    summaryDataset.push({
        name: 'Insentif',
        weight: totalAddWorth / dataset.pricePerKg,
        worth: totalAddWorth,
    })

    return summaryDataset
}

interface AnuType {
    qty: number
    category: any
    percentage: number
    percentageNote: string
    weight: number
    weightNote: string
    worth: number
    worthNote: string
    cutWorth: number
    cutNote: string
    addWorth: number
    addNote: string
}

interface TypeB {
    name: string
    weight: number
    worth: number
    tooltip?: string
}
