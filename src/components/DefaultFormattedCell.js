import { memo } from "react"

import Box from "@mui/system/Box"
import TableCell from "@mui/material/TableCell"


const DefaultFormattedCell = ({ value, unit, th }) => {
	return (
		<TableCell component={th ? 'th' : 'td'}>

			<Box sx={{
				display: 'flex',
				flexDirection: "row"
			}}>
				<Box>{value ? value.toLocaleString('id-ID', {
					// minimumFractionDigits: 0,
					maximumFractionDigits: 2
				}) : '-'}</Box>
				<Box ml={2}>{unit}</Box>
			</Box>
		</TableCell>
	)
}

export default memo(
	DefaultFormattedCell,
	(oldProps, newProps) => oldProps.value === newProps.value &&
		oldProps.unit === newProps.unit &&
		oldProps.th === newProps.th
)