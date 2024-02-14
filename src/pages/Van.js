import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Van = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    let typeFilter = searchParams.get("type")
    console.log(typeFilter)
    const [vans, setVans] = React.useState([])

    React.useEffect(function () {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter) : vans

    const vanElement = displayedVans.map(van => (
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
            <div className='van-list-filter-buttons'>
                <Link className='van-type simple' to="?type=simple">Simple</Link>
                <Link className='van-type luxury' to="?type=luxury">Luxury</Link>
                <Link className='van-type rugged' to="?type=rugged">Rugged</Link>
                <Link className='van-type clear-filters' to=".">Clear Filter</Link>
            </div>
            <div className='van-list'>
                {vanElement}
            </div>
        </div>
    )
}

export default Van
