import './EventCard.css'

function EventCard({ title, dateStart, dateEnd, titleColor }) {
    return (
        <>
            <div className="event" >
                <h2 style={{color: titleColor}} className="event-name">{title}</h2>
                <p className="event-dates">{dateStart} - {dateEnd}</p>
            </div>
        </>
    )
}

export default EventCard;