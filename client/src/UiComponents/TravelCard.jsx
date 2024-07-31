import React from 'react'
import style from '../css/TravelCard.module.css'

const TravelCard = ({
	namecard,
	startDate,
	endDate,
	onClick,
	isLastClicked,
}) => {
	// Ваша логика компонента здесь
	const imgCity = require(`../img/Cities/${namecard}.webp`)
	return (
		<div
			className={`${style.cardWrapper} ${isLastClicked ? style.clicked : ' '}`}
			onClick={onClick}
		>
			<div className={style.card}>
				<div className={style.imgWrapper}>
					<div className={style.img}>
						<img src={imgCity} alt='city' />
					</div>
				</div>
				<div className={style.title}>{namecard}</div>
				<div className={style.travelDate}>
					{startDate} - {endDate}
				</div>
			</div>
		</div>
	)
}

export default TravelCard
