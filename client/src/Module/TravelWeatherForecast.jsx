import { useEffect, useState } from 'react'
import WeatherForecast from '../Api/WeatherForecastAllTravel'
import findDayOfWeek from '../Helper/findDayOfWeekByDayOfMonth'
import { useStore } from '../Storages/LastClikedElement'
import style from '../css/TravelWeatherForecast.module.css'
function TravelWeatherForecast() {
	const { lastClickedObjct } = useStore()

	const [lastClickedObjctState, setLastClickedObjctState] = useState(null)
	let WeatherForecastData
	useEffect(() => {
		const fetchWeatherForecast = async () => {
			try {
				if (JSON.stringify(lastClickedObjct) != '{}') {
					WeatherForecastData = await WeatherForecast(
						lastClickedObjct.city,
						lastClickedObjct.startDate,
						lastClickedObjct.endDate
					)
				}

				setLastClickedObjctState(WeatherForecastData)
			} catch (error) {
				console.error('Ошибка при получении прогноза погоды:', error)
			}
		}
		fetchWeatherForecast()
	}, [lastClickedObjct])

	function getUrlString(nameIcon) {
		return require(`../img/weatherIcon/${nameIcon}.svg`)
	}
	return (
		<section className={style.wrapper}>
			<h3>Week</h3>
			<div className={style.cardWrapper}>
				{lastClickedObjctState &&
					lastClickedObjctState.days
						.filter((item, index) => index <= 6)
						.map((item, index) => (
							<div className={style.card} key={index}>
								<div className={style.dayOfWeek}>
									{findDayOfWeek(item.datetime)}
								</div>
								<div className={style.icon}>
									<img src={getUrlString(item.icon)} alt='icon' />
								</div>
								<div className={style.temp}>
									{item.tempmax}°/{item.tempmin}°
								</div>
							</div>
						))}
			</div>
		</section>
	)
}

export default TravelWeatherForecast
