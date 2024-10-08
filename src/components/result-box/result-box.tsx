import { useRef, useState, useEffect, useMemo } from "react";

import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import calculatePalmGrade from "../../helpers/calculate-palm-grade";
import DetailDialog from "./components/detail-dialog";
import SummaryTable from "./components/summary-table";
import TextField from "../text-field";

// import { GALog } from "../helpers/firebaseClient";
import {
	currencyFormat,
	getSavedDatasets,
	numberFormat,
} from "../../helpers/index";
import vars from "../../helpers/vars";
import moment from "moment";

import SaveIcon from "@mui/icons-material/Save";

const getSummaryData = (detailsCalculation: AnuType[]) => {
	const dataset = vars.formValues[0];

	const summaryDataset: TypeB[] = [
		{
			name: "Tandan Buah Segar",
			weight: dataset.totalWeight,
			worth: dataset.totalWeight * dataset.pricePerKg,
			tooltip: `${numberFormat(dataset.totalWeight)} × ${currencyFormat(
				dataset.pricePerKg
			)}`,
		},
	];

	const { totalCutWorth, totalAddWorth } = detailsCalculation.reduce(
		(acc, detail) => ({
			totalCutWorth: acc.totalCutWorth + detail.cutWorth,
			totalAddWorth: acc.totalAddWorth + detail.addWorth,
		}),
		{
			totalCutWorth: 0,
			totalAddWorth: 0,
		}
	);

	summaryDataset.push({
		name: "Potongan",
		weight: totalCutWorth / dataset.pricePerKg,
		worth: totalCutWorth,
	});

	summaryDataset.push({
		name: "Insentif",
		weight: totalAddWorth / dataset.pricePerKg,
		worth: totalAddWorth,
	});

	return summaryDataset;
};

let calculationResults: AnuType[] = [];

const ResultBox = () => {
	const temp = vars.formValues[0];
	const dataset = useMemo(() => {
		return { ...temp };
	}, [temp]);

	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [summaryData, setSummaryData] = useState<TypeB[]>([]);
	const [pricePerKg, setPricePerKg] = useState(dataset.pricePerKg || "");

	const detailBtnRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		vars.formValues[0].pricePerKg = pricePerKg;
		vars.formValues[1]({ ...vars.formValues[0] });

		calculationResults = calculatePalmGrade(vars.formValues[0]);

		setSummaryData(getSummaryData(calculationResults));
	}, [pricePerKg]);

	useEffect(() => {
		setPricePerKg(dataset.pricePerKg || "");
	}, [dataset.savedAt, dataset.pricePerKg]);

	return (
		<>
			<Box
				component="form"
				onSubmit={(e) => {
					e.preventDefault();
					return detailBtnRef.current?.focus();
				}}
			>
				<TextField
					code="price"
					toParent={(value) => setPricePerKg(value)}
					value={pricePerKg}
					// onBlur={(e) => GALog("enter_price")}
				/>

				<Button type="submit" sx={{ display: "none" }}></Button>
			</Box>

			<SummaryTable dataset={summaryData} />

			<Box justifyContent="space-between" display="flex" mt={6}>
				<Box>
					<Button
						variant="outlined"
						onClick={() => {
							// GALog('click_reset');
							vars.activeStep[1](0);
							vars.formValues[1]({});
						}}
					>
						Ulangi
					</Button>
				</Box>

				<Box gap={2} display="flex" alignItems="center">
					<Tooltip title="Simpan hasil perhitungan" placement="top">
						<span>
							<IconButton
								color="primary"
								disabled={
									!Boolean(pricePerKg) ||
									JSON.stringify(dataset) ===
										JSON.stringify(
											getSavedDatasets().find(
												(data) => data.savedAt === dataset.savedAt
											)
										)
								}
								onClick={() => {
									const savedDatasets = getSavedDatasets();

									if (dataset.savedAt) {
										const delIndex = savedDatasets.findIndex(
											(data) => data.savedAt === dataset.savedAt
										);
										savedDatasets.splice(delIndex, 1);
									}

									dataset.savedAt = moment().format();
									dataset.finalWeight =
										summaryData[0]?.weight -
										summaryData[1]?.weight +
										summaryData[2]?.weight;
									dataset.finalWorth =
										summaryData[0]?.worth -
										summaryData[1]?.worth +
										summaryData[2]?.worth;

									vars.formValues[1]({ ...dataset });
									savedDatasets.push({ ...dataset });

									window.localStorage.setItem(
										"savedDatasets",
										JSON.stringify(savedDatasets)
									);
								}}
							>
								<SaveIcon />
							</IconButton>
						</span>
					</Tooltip>

					<Button
						ref={detailBtnRef}
						disabled={!Boolean(pricePerKg)}
						variant="contained"
						onClick={() => {
							// GALog('click_detail_cuts')
							setIsDetailOpen(true);
						}}
					>
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
	);
};

export default ResultBox;

interface AnuType {
	qty: number;
	category: any;
	percentage: number;
	percentageNote: string;
	weight: number;
	weightNote: string;
	worth: number;
	worthNote: string;
	cutWorth: number;
	cutNote: string;
	addWorth: number;
	addNote: string;
}

interface TypeB {
	name: string;
	weight: number;
	worth: number;
	tooltip?: string;
}
