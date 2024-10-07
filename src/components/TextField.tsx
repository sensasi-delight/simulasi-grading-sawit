import { useEffect, useState } from "react";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import categoriesDataset from "../data/categories";

const getCategory = (code: string): (typeof categoriesDataset)[0] | undefined =>
	categoriesDataset.find((category) => category.code === code);

const MyTextField = ({
	code,
	toParent,
	onBlur,
	...props
}: {
	code: string;
	toParent: (value: number) => void;
	onBlur?: () => void;
	value?: string | number;
	isError?: boolean;
}) => {
	const [value, setValue] = useState(props.value?.toString() ?? '');
	const [isError, setIsError] = useState(props.isError ? true : false);

	let temp:
		| (typeof categoriesDataset)[0]
		| {
				name: string;
				unit: string;
		  }
		| undefined;

	if (code === "price" || code === "totalWeight") {
		if (code === "price") {
			temp = {
				name: "Harga Jual",
				unit: "/kg",
			};
		}

		if (code === "totalWeight") {
			temp = {
				name: "Total Bobot (Berat / Tonase)",
				unit: "kg",
			};
		}
	} else {
		temp = getCategory(code);
	}

	const category = temp;

	const getHelperText = () => {
		const subtractionRule =
			category && "rules" in category
				? category.rules.find((rule) => rule.operation === "subtraction")
				: undefined;

		if (subtractionRule && subtractionRule.operand === 1)
			return "potongan 100% / reject";
		if (isError) return "Mohon melengkapi isian";

		return "";
	};

	useEffect(() => setIsError(props?.isError ?? false), [props.isError]);

	useEffect(() => setValue(props.value?.toString() ?? ""), [props.value]);

	return (
		<TextField
			value={value}
			onChange={(e) => {
				if (isError) setIsError(false);
				toParent(parseFloat(e.target.value));
				return setValue(e.target.value);
			}}
			label={category?.name}
			onBlur={onBlur}
			error={isError}
			helperText={getHelperText()}
			InputProps={{
				startAdornment:
					code === "price" ? (
						<InputAdornment position="start">Rp</InputAdornment>
					) : (
						""
					),
				endAdornment: (
					<InputAdornment position="end">{category?.unit}</InputAdornment>
				),
				inputMode: "numeric",
				// pattern: "[0-9]*",
				inputProps: { min: 0 },
			}}
			// style & type
			size="small"
			fullWidth
			margin="dense"
			type="number"
			required
			autoComplete="off"
		/>
	);
};

export default MyTextField;
