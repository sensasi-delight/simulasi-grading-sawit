const CATEGORIES = {
	nRipe: {
		name: 'BUAH MATANG',
		cutPercentage: 0,
		unit: 'Janjang'
	}, nRaw: {
		name: 'BUAH MENTAH',
		cutPercentage: 0.5,
		unit: 'Janjang'
	}, nUnripe: {
		name: 'BUAH LEWAT MATANG',
		cutPercentage: 0.25,
		unit: 'Janjang'
	},
	nEmptyLadder: {
		name: 'BUAH JANJANG KOSONG',
		cutPercentage: 1,
		unit: 'Janjang'
	},
	nRestan: {
		name: 'BUAH MENGINAP',
		cutPercentage: 0.25,
		unit: 'Janjang'
	},
	nLongRod: {
		name: 'TANGKAI PANJANG',
		cutPercentage: 0.01,
		unit: 'Janjang'
	},
	nSmallLadder: {
		name: 'JANJANG KECIL',
		cutPercentage: 0.7,
		unit: 'Janjang'
	},
	nPiece: {
		name: 'BERONDOLAN',
		cutPercentage: 0.3,
		unit: 'kg'
	},
	nDirtyPiece: {
		name: 'BERONDOLAN KOTOR',
		cutPercentage: 2,
		unit: 'kg'
	}
}


function getCutResult(id, qty, totalLadder, totalWeight, price) {
	let returnObj = {}

	returnObj.id = id
	returnObj.name = CATEGORIES[id].name
	returnObj.unit = CATEGORIES[id].unit
	returnObj.qty = qty

	returnObj.percentage = returnObj.qty / totalLadder
	returnObj.weight = totalWeight * returnObj.percentage

	if (returnObj.unit === 'kg') {
		returnObj.weight = qty
		returnObj.percentage = qty / totalWeight
	}

	returnObj.worth = returnObj.weight * price


	//CALC CUT ----->

	//default
	returnObj.cutPercentage = CATEGORIES[returnObj.id].cutPercentage
	returnObj.cutWeight = returnObj.percentage * totalWeight * returnObj.cutPercentage
	returnObj.description = '-'

	if (['nUnripe', 'nRestan'].includes(returnObj.id)) {
		const diff = returnObj.percentage - 0.05
		returnObj.cutPercentage = diff > 0 ? CATEGORIES[returnObj.id].cutPercentage : 0
		returnObj.cutWeight = diff > 0 ? diff * totalWeight * returnObj.cutPercentage : 0
		returnObj.description = diff > 0 ? `Selisih ${(diff * 100).toLocaleString('id-ID', { maximumFractionDigits: 2 })}% dari ketentuan` : 'Persentase TBS < 5%'
	}

	if (returnObj.id === 'nPiece') {
		const diff = returnObj.percentage - 0.125
		returnObj.cutPercentage = diff > 0 ? 0 : CATEGORIES[returnObj.id].cutPercentage
		returnObj.cutWeight = diff > 0 ? 0 : diff * -1 * totalWeight * returnObj.cutPercentage
		returnObj.description = diff > 0 ? 'Persentase TBS > 12,5%' : `Selisih ${(diff * -100).toLocaleString('id-ID', { maximumFractionDigits: 2 })}% dari ketentuan`
	}

	//<----CALC CUT END


	returnObj.cutWorth = returnObj.cutWeight * price

	return returnObj
}

const getDetailCuts = (dataset, totalLadder, totalWeight, pricePerKg) => {
	let theCuts = []

	Object.keys(CATEGORIES).map(key => theCuts.push(
		getCutResult(key, dataset[key], totalLadder, totalWeight, pricePerKg)
	))

	return theCuts
}

const getTotalLadder = dataset => {
	const {nRipe, nRaw, nUnripe, nEmptyLadder} = {...dataset}
	return (nRipe || 0) + (nRaw || 0) + (nUnripe || 0) + (nEmptyLadder || 0)
}

const getIncentive = (totalCutWorth, totalWorth) => {

	if (totalCutWorth === 0) {
		return totalWorth * 0.04
	}

	return 0
}

export default function calculatePalmGrade(dataset) {
	const { nWeight, price } = {...dataset}

	const pricePerKg = price
	const totalLadder = getTotalLadder(dataset)
	const totalWeight = nWeight || 0
	
	const detailCuts = getDetailCuts(dataset, totalLadder, totalWeight, pricePerKg);
	
	

	
	
	const totalCutWeight = detailCuts.reduce((a, b) => a + (b.cutWeight || 0), 0)
	const totalCutWorth = totalCutWeight * pricePerKg
		
	const totalWorth = totalWeight * pricePerKg
	const incentive = getIncentive(totalCutWorth, totalWorth)

	const weightDiff = totalWeight - totalCutWeight
	const worthDiff = weightDiff * price + incentive


	let summaryData = [{
		name: 'TBS',
		weight: totalWeight,
		worth: totalWorth
	}, {
		name: 'POTONGAN',
		weight: totalCutWeight,
		worth: totalCutWorth
	}]

	if (incentive) {
		summaryData.push({
			name: 'INSENTIF',
			weight: 0,
			worth: incentive
		})
	}

	summaryData.push({
		name: 'PENDAPATAN',
		weight: weightDiff,
		worth: worthDiff
	})

	return {
		detailCuts: detailCuts,
		summaryData: summaryData
	}
}