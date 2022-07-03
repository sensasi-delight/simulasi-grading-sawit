import Box from "@mui/system/Box"

export function rpFormat(value) {
	return (
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
	)

}

export function formatCell(value, unit) {
	return (
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
	)
}