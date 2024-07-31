import React, { useState } from 'react'
import AllTripStore from '../Storages/AllTripStore'
import DatePicker from '../UiComponents/DatePicker'
import '../css/PopUp.css'

const FormAddTrip = ({ handleClose, show }) => {
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [selectedValue, setSelectedValue] = useState('')
	const [selectedDate, setSelectedDate] = useState('')
	const showHideClassName = show ? 'display-block' : 'display-none'
	const { TripStoreArray, addItemTripStoreArray } = AllTripStore()

	const handleCloseModal = e => {
		e.stopPropagation()
		handleClose()
	}

	const handleSelectChange = event => {
		setSelectedValue(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()
		const dateStart = new Date(startDate).toISOString().split('T')[0]
		const dateEnd = new Date(endDate).toISOString().split('T')[0]
		const biggestId =
			TripStoreArray.reduce((maxId, item) => {
				return Math.max(maxId, item.id)
			}, 0) + 1

		const dataObject = {
			id: biggestId,
			startDate: dateStart,
			endDate: dateEnd,
			city: selectedValue,
		}

		addItemTripStoreArray(dataObject)
	}

	const handleCancel = () => {
		setStartDate('')
		setEndDate('')
		setSelectedValue('')
		handleClose()
	}

	return (
		<div className={showHideClassName} onClick={handleClose}>
			<div className='pop-up-container' onClick={e => e.stopPropagation()}>
				<section className='modal-main'>
					<div className='header-pop-up'>
						<h3 className='title-pop-up'>Create trip</h3>
						<div className='cross' onClick={handleClose}>
							<span className='horizontal'></span>
							<span className='vertical'></span>
						</div>
					</div>
					<div className='input-block'>
						<label htmlFor=''>
							<div>
								<span className='redSign'>*</span>City
							</div>
							<select
								id='citySelect'
								value={selectedValue}
								onChange={handleSelectChange}
							>
								<option>Please select a city</option>
								<option value='Tokyo'>Tokyo</option>
								<option value='Rio de janeiro'>Rio de janeiro</option>
								<option value='New york'>New york</option>
								<option value='London'>London</option>
								<option value='Cairo'>Cairo</option>
								<option value='Brussel'>Brussel</option>
								<option value='Berlin'>Berlin</option>
								<option value='Barcelona'>Barcelona</option>
							</select>
						</label>
						<label>
							<div>
								<span className='redSign'>*</span>Start date
							</div>
							<DatePicker
								value={startDate}
								onChange={setStartDate}
								placeholder='Select date'
							/>
						</label>
						<label>
							<div>
								<span className='redSign'>*</span>End date
							</div>
							<DatePicker
								value={endDate}
								onChange={setEndDate}
								placeholder='Select date'
							/>
						</label>
						<div className='blok-btn'>
							<button
								className='cencel-btn  btn'
								type='button'
								onClick={handleCancel}
							>
								Cancel
							</button>
							<button
								className='save-btn btn'
								type='button'
								onClick={handleSubmit}
							>
								Save
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default FormAddTrip
