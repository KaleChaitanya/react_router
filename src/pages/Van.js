import React from 'react'
import { Link } from 'react-router-dom'

const Van = () => {
    const [vans, setVans] = React.useState([])

    React.useEffect(function () {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElement = vans.map(van => (
        <div key={van.id} className='van-tile'>
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className='van-info'>
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
    return (
        <div className='van-list-container'>
            <h1>Explorer our van options</h1>
            <div className='van-list'>
                {vanElement}
            </div>
        </div>
    )
}

export default Van
