import React, { useEffect, useState } from 'react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import FormAddTrip from '../Module/FormAddTrip'
import AllTripStore from '../Storages/AllTripStore'
import { useStore } from '../Storages/LastClikedElement'
import CardAddTrip from '../UiComponents/CardAddTrip'
import style from '../css/TravelList.module.css'
import searchIcon from '../img/search.svg'
import TravelCard from './TravelList'

const TravelList = () => {
	const { TripStoreArray } = AllTripStore()
	const { setLastClickedObjct } = useStore()
	const [travelList, setTravelList] = useState(TripStoreArray)
	const [lastClickedIndex, setLastClickedIndex] = useState(0)
	const [showPopup, setShowPopup] = useState(false)
	const [searchInput, setSearchInput] = useState('')
	const togglePopup = () => {
		setShowPopup(!showPopup)
	}

	useEffect(() => {
		setTravelList(TripStoreArray)
	}, [TripStoreArray])

	// const handleCardClick = index => {
	// 	const findObj = travelList.filter(item => item.id === index)
	// 	setLastClickedIndex(findObj[0].id)
	// 	setLastClickedObjct(findObj[0])
	// }

	// useEffect(() => {
	// 	handleCardClick(0)
	// }, [])
	const handleSearchInputChange = event => {
		const { value } = event.target
		setSearchInput(value)
		const filteredList = TripStoreArray.filter(item =>
			item.city.toLowerCase().includes(value.toLowerCase())
		)
		setTravelList(filteredList)
	}

	return (
		<>
			<div className={style.searchInputWrapper}>
				<span>
					<img src={searchIcon} alt='searchIcon' />
				</span>
				<input
					className={style.searchInput}
					type='text'
					onChange={handleSearchInputChange}
					value={searchInput}
					placeholder='Search your trip'
				/>
			</div>
			<section className={style.sliderWrapper}>
				<Swiper
					modules={[Navigation]}
					slidesPerView={4}
					navigation
					pagination={{ clickable: true }}
					mousewheel={true}
					breakpoints={{
						1024: {
							slidesPerView: 4,
						},
						768: {
							slidesPerView: 3,
						},
						320: {
							slidesPerView: 2,
						},
					}}
				>
					{travelList &&
						travelList.map((item, index) => (
							<SwiperSlide key={item.id}>
								<TravelCard
									key={index}
									namecard={item.city}
									startDate={item.startDate}
									endDate={item.endDate}
									// onClick={() => handleCardClick(index)}
									isLastClicked={index === lastClickedIndex}
								/>
							</SwiperSlide>
						))}
					<SwiperSlide>
						<CardAddTrip handleOpen={togglePopup} />
					</SwiperSlide>
				</Swiper>
				<FormAddTrip show={showPopup} handleClose={togglePopup} />
			</section>
		</>
	)
}

export default TravelList
