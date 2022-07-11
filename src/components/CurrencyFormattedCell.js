import { memo } from "react"

import Box from "@mui/system/Box"
import TableCell from "@mui/material/TableCell"


const CurrencyFormattedCell = ({ value, th, sx }) => {
	return (
		<TableCell sx={sx} component={th ? 'th' : 'td'}>
			<Box sx={{
				display: 'flex',
				flexDirection: "row",
				justifyContent: "space-between",
			}}>
				<Box mr={2}>Rp</Box>
				<Box>{value ? value.toLocaleString('id-ID', {
					maximumFractionDigits: 0
				}) : '-'}</Box>
			</Box>
		</TableCell>
	)
}



export default memo(CurrencyFormattedCell, (oldProps, newProps) =>
	oldProps.value === newProps.value &&
		oldProps.th === newProps.th
)