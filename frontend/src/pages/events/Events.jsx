import React, { useEffect, useState } from 'react';
import './EventPage.css'; // CSS file for styling
import { BiFontSize } from 'react-icons/bi';

const EventPage = () => {
    const [events, setEvents] = useState([]);
    const [currentlyExpanded, setCurrentlyExpanded] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/events.json'); // Ensure your JSON file is located in the public folder
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching JSON:', error);
            }
        };
        fetchData();
    }, []);

    const handleClick = (index) => {
        if (currentlyExpanded === index) {
            setCurrentlyExpanded(null); // Close the expanded card
        } else {
            setCurrentlyExpanded(index); // Open the clicked card
        }
    };

    return (
        <div>
            <h1 style={{fontSize: "32px"}}>Upcoming Events</h1>
            <div className="events-grid">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`event ${currentlyExpanded === index ? 'expanded' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        <h2>{event['event-name']}</h2>
                        <img src={event.img} alt={event['event-name']} />
                        <p><strong>Day:</strong> {event.day}</p>
                        <p><strong>Time:</strong> {event.time}</p>
                        <p><strong>Venue:</strong> {event.venue}</p>
                        {currentlyExpanded === index && (
                            <div className="more-info">
                                <p><strong>Description:</strong> {event.desc}</p>
                                <p><strong>Duration:</strong> {event.duration}</p>
                                <p><strong>Point of Contact:</strong> {event['Point of Contact:']}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventPage;
