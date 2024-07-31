import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import React, { useEffect, useRef } from 'react'

const DatePicker = ({ onChange, value, placeholder }) => {
	const inputRef = useRef(null)

	useEffect(() => {
		const options = {
			dateFormat: 'Y-m-d', // Формат даты YYYY-MM-DD
			onChange: onChange, // Обработчик изменения значения
			minDate: 'today',
			maxDate: new Date().fp_incr(14),
		}

		flatpickr(inputRef.current, options) // Инициализация Flatpickr
	}, [onChange])

	return (
		<input ref={inputRef} type='text' value={value} placeholder={placeholder} />
	)
}

export default DatePicker
