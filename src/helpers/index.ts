export const currencyFormat = (number: number) =>
    number?.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    })

export const numberFormat = (number: number, maximumFractionDigits = 2) =>
    number?.toLocaleString('id-ID', {
        maximumFractionDigits: maximumFractionDigits,
    })

interface SummaryData {
    name: string
    weight: number
    worth: number
}

interface CalculationResult {
    category: {
        name: string
        unit: string
    }
    qty: number
    percentage: number
    cutWorth: number
    addWorth: number
}

export const generateSummaryShareMessage = (
    summaryData: SummaryData[],
    finalWeight: number,
    finalWorth: number,
    pricePerKg: number,
) => {
    const tbsWeight = summaryData[0]?.weight || 0
    const tbsWorth = summaryData[0]?.worth || 0
    const cutWeight = summaryData[1]?.weight || 0
    const cutWorth = summaryData[1]?.worth || 0
    const addWeight = summaryData[2]?.weight || 0
    const addWorth = summaryData[2]?.worth || 0

    return `📊 Hasil Grading Sawit 📊

TBS: ${numberFormat(tbsWeight, 0)} kg @ ${currencyFormat(pricePerKg)}/kg
Nilai TBS: ${currencyFormat(tbsWorth)}

Potongan: -${numberFormat(cutWeight, 0)} kg (${currencyFormat(cutWorth)})
Insentif: +${numberFormat(addWeight, 0)} kg (${currencyFormat(addWorth)})

━━━━━━━━━━━━━━━━━━━━
Hasil Akhir: ${numberFormat(finalWeight, 0)} kg
Nilai Akhir: ${currencyFormat(finalWorth)}
━━━━━━━━━━━━━━━━━━━━

Hitung grading sawitmu di:
https://simulasi-grading-sawit.web.app`
}

export const generateDetailedShareMessage = (
    calculationResults: CalculationResult[],
    summaryData: SummaryData[],
    finalWeight: number,
    finalWorth: number,
    pricePerKg: number,
) => {
    const tbsWeight = summaryData[0]?.weight || 0
    const tbsWorth = summaryData[0]?.worth || 0
    const cutWorth = summaryData[1]?.worth || 0
    const addWorth = summaryData[2]?.worth || 0

    let detailsText = ''
    for (const result of calculationResults) {
        if (result.qty > 0) {
            const percentageText = `${numberFormat(result.percentage * 100, 1)}%`
            detailsText += `\n• ${result.category.name}: ${numberFormat(result.qty, 0)} ${result.category.unit} (${percentageText})`

            if (result.cutWorth > 0) {
                detailsText += `\n  Potongan: ${currencyFormat(result.cutWorth)}`
            }
            if (result.addWorth > 0) {
                detailsText += `\n  Insentif: ${currencyFormat(result.addWorth)}`
            }
        }
    }

    return `📊 Hasil Grading Sawit (Detail) 📊

TBS: ${numberFormat(tbsWeight, 0)} kg @ ${currencyFormat(pricePerKg)}/kg
Nilai TBS: ${currencyFormat(tbsWorth)}

RINCIAN GRADING:${detailsText}

━━━━━━━━━━━━━━━━━━━━
Total Potongan: ${currencyFormat(cutWorth)}
Total Insentif: ${currencyFormat(addWorth)}

Hasil Akhir: ${numberFormat(finalWeight, 0)} kg
Nilai Akhir: ${currencyFormat(finalWorth)}
━━━━━━━━━━━━━━━━━━━━

Hitung grading sawitmu di:
https://simulasi-grading-sawit.web.app`
}
