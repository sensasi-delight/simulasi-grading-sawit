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
