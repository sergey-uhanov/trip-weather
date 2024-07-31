import React from 'react'
import TravelList from '../Module/TravelList'
import AllTripStore from '../Storages/AllTripStore'
import { useStore } from '../Storages/LastClikedElement'
import TravelWeatherForecast from './TravelWeatherForecast'
function MainPart() {
	const { TripStoreArray, addItemTripStoreArray } = AllTripStore()
	const { lastClickedObjct, setLastClickedObjct } = useStore()

	return (
		<section className='main-section'>
			<h1>Weather Forecast</h1>
			<TravelList />
			<TravelWeatherForecast />
		</section>
	)
}

export default MainPart
