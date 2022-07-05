const categories = {
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


	function getCalcData(id, qty, totalLadder, totalWeight, price) {
		let returnObj = {}

		returnObj.id = id
		returnObj.name = categories[id].name
		returnObj.unit = categories[id].unit
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
		returnObj.cutPercentage = categories[returnObj.id].cutPercentage
		returnObj.cutWeight = returnObj.percentage * totalWeight * returnObj.cutPercentage
		returnObj.description = '-'

		if (['nUnripe', 'nRestan'].includes(returnObj.id)) {
			const diff = returnObj.percentage - 0.05
			returnObj.cutPercentage = diff > 0 ? categories[returnObj.id].cutPercentage : 0
			returnObj.cutWeight = diff > 0 ? diff * totalWeight * returnObj.cutPercentage : 0
			returnObj.description = diff > 0 ? `Selisih ${(diff * 100).toLocaleString('id-ID', { maximumFractionDigits: 2 })}% dari ketentuan` : 'Persentase TBS < 5%'
		}

		if (returnObj.id === 'nPiece') {
			const diff = returnObj.percentage - 0.125
			returnObj.cutPercentage = diff > 0 ? 0 : categories[returnObj.id].cutPercentage
			returnObj.cutWeight = diff > 0 ? 0 : diff * -1 * totalWeight * returnObj.cutPercentage
			returnObj.description = diff > 0 ? 'Persentase TBS > 12,5%' : `Selisih ${(diff * -100).toLocaleString('id-ID', { maximumFractionDigits: 2 })}% dari ketentuan`
		}

		//<----CALC CUT END


		returnObj.cutWorth = returnObj.cutWeight * price

		return returnObj
	}

export default function calculatePalmGrade(formValue) {
	const { nWeight, nRipe, nRaw, nUnripe, nEmptyLadder, price } = formValue

	let returnObj = {}

	returnObj.price = price || 0
	returnObj.totalLadder = (nRipe || 0) + (nRaw || 0) + (nUnripe || 0) + (nEmptyLadder || 0)
	returnObj.totalWeight = nWeight || 0
	returnObj.totalWorth = returnObj.totalWeight * returnObj.price

	returnObj.dataset = []

	Object.keys(categories).map(key => returnObj.dataset.push(
		getCalcData(key, formValue[key], returnObj.totalLadder, returnObj.totalWeight, returnObj.price)
	))

	returnObj.totalCutWeight = 0
	returnObj.dataset.map(data => returnObj.totalCutWeight += data.cutWeight)


	returnObj.totalCutWorth = returnObj.totalCutWeight * returnObj.price
	
	let incentive = 0
	if (returnObj.totalCutWorth === 0) {
		incentive = returnObj.totalWorth * 0.04
	}

	returnObj.weightDiff = returnObj.totalWeight - returnObj.totalCutWeight
	returnObj.worthDiff = returnObj.weightDiff * returnObj.price + incentive

	

	returnObj.summaryDataset = [{
		name: 'TBS',
		weight: returnObj.totalWeight,
		worth: returnObj.totalWorth
	}, {
		name: 'POTONGAN',
		weight: returnObj.totalCutWeight,
		worth: returnObj.totalCutWorth
	}]

	if (incentive) {
		returnObj.summaryDataset.push({
			name: 'INSENTIF',
			weight: 0,
			worth: incentive
		})
	}

	returnObj.summaryDataset.push({
		name: 'PENDAPATAN',
		weight: returnObj.weightDiff,
		worth: returnObj.worthDiff
	})

	return returnObj
}