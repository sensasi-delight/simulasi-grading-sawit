import Box from '@mui/system/Box'
import TableCell from '@mui/material/TableCell'
import Tooltip from '@mui/material/Tooltip'

import { numberFormat } from '@/helpers'

interface Props {
    value: number
    unit?: string
    th?: boolean
    tooltip?: string
    sx?: object
    format?: string
}

export default function ValueTableCell({
    value,
    unit,
    th,
    tooltip,
    sx,
    format,
}: Props) {
    return (
        <TableCell sx={sx} component={th ? 'th' : 'td'}>
            {!Number.isNaN(value) && value !== 0 && (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:
                            format === 'currency' ? 'space-between' : 'unset',
                        alignItems: 'center',
                    }}>
                    {format === 'currency' && <Box mr={2}>Rp</Box>}

                    <Box>
                        {tooltip && (
                            <Tooltip title={tooltip}>
                                <span
                                    style={{
                                        textDecoration: 'underline',
                                        textDecorationStyle: 'dashed',
                                    }}>
                                    {numberFormat(
                                        value,
                                        format === 'currency' ? 0 : 2,
                                    )}
                                </span>
                            </Tooltip>
                        )}

                        {!tooltip &&
                            numberFormat(value, format === 'currency' ? 0 : 2)}
                    </Box>

                    {unit && <Box ml={2}>{unit}</Box>}
                </Box>
            )}
        </TableCell>
    )
}
