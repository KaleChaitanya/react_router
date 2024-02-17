import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VanDetails = () => {
  const param = useParams();
  const [van, setVan] = React.useState(null);
  const location = useLocation();
  console.log(location);

  React.useEffect(
    function () {
      fetch(`/api/vans/${param.id}`)
        .then((res) => res.json())
        .then((data) => setVan(data.vans));
    },
    [param.id]
  );
  const search = location.state?.search || ""; //optional chaining
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading.......</h2>
      )}
    </div>
  );
};

export default VanDetails;
