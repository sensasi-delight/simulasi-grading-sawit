import type SavedDataset from '../types/saved-dataset'

export function getSavedDatasets() {
    const savedDatasetsString = localStorage.getItem('savedDatasets')

    return (
        savedDatasetsString ? JSON.parse(savedDatasetsString) : []
    ) as SavedDataset[]
}
