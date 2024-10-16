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

export const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.0/8 are considered localhost for IPv4.
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.exec(
            window.location.hostname,
        ),
)

export const isProduction = Boolean(
    process.env.NODE_ENV === 'production' &&
        process.env.REACT_APP_ENV === 'production',
)
