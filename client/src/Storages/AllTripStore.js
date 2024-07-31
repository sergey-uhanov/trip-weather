import create from 'zustand'

let AllTripStore = create(set => ({
	TripStoreArray: [],
	addItemTripStoreArray: obj =>
		set(state => ({ TripStoreArray: [...state.TripStoreArray, obj] })),
	deleteItemTripStoreArray: obj =>
		set(state => ({
			TripStoreArray: state.TripStoreArray.filter(item => item.id !== obj.id),
		})),
}))

export default AllTripStore
