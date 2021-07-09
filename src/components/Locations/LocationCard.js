import React from 'react'
import './Locations.css'

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location_name">{location.className}</h3>
        <div className="location_address">{location.address}</div>
    </section>
)


