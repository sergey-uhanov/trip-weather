import { useEffect, useState } from 'react'
import { wheatherNow } from '../Api/WeatherNow'
import countdown from '../Helper/countdown'
import dayOfWeek from '../Helper/dayOfWeek'
import { useStore } from '../Storages/LastClikedElement'
import style from '../css/SideBaner.module.css'
import cloudIcon from '../img/iconCloud.png'
function SideBaner() {
	const { lastClickedObjct } = useStore()
	const [weatherNowData, setWeatherNowData] = useState(null)
	let [countdownObject, setCountdownObject] = useState({})

	useEffect(() => {
		wheatherNow(lastClickedObjct.city).then(weatherData => {
			setWeatherNowData(weatherData)
		})
		const startTraval = lastClickedObjct.startDate

		const interval = setInterval(() => {
			setCountdownObject(countdown(startTraval))
		}, 1000)

		return () => clearInterval(interval)
	}, [lastClickedObjct])

	let iconWeather
	if (weatherNowData) {
		iconWeather = require(`../img/weatherIcon/${weatherNowData.days[0].icon}.svg`)
	}

	return (
		<section className={style.sideBaner}>
			<div className={`${style.cloud} ${style.cloud1}`}>
				<img src={cloudIcon} alt='cloudIcon' />
			</div>
			<div className={`${style.cloud} ${style.cloud2}`}>
				<img src={cloudIcon} alt='cloudIcon' />
			</div>
			<div className={`${style.cloud} ${style.cloud3}`}>
				<img src={cloudIcon} alt='cloudIcon' />
			</div>
			<div className={`${style.cloud} ${style.cloud4}`}>
				<img src={cloudIcon} alt='cloudIcon' />
			</div>

			{weatherNowData && (
				<>
					<div className={style.day}>{dayOfWeek}</div>
					<div className={style.weatherСonditions}>
						<div className={style.weatherIcon}>
							<img src={iconWeather} alt='iconWeather' />
						</div>
						<div className={style.temp}>{weatherNowData.days[0].temp}</div>
					</div>
					<div className={style.city}>{weatherNowData.address}</div>
					<ul className={style.countdown}>
						<li>
							{countdownObject.days}
							<span>days</span>
						</li>
						<li>
							{countdownObject.hours}
							<span>hours</span>
						</li>
						<li>
							{countdownObject.minutes}
							<span>minutes</span>
						</li>
						<li>
							{countdownObject.seconds}
							<span>seconds</span>
						</li>
					</ul>
				</>
			)}
		</section>
	)
}

export default SideBaner
