import React, { useState, useEffect } from 'react';

const Location = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [locData, setLocData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setLocData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return <p>Loading origin data...</p>;
  }

  if (error) {
    return(
      <div className='character-card'>
        <h4>Location</h4>
        <p>Unknown</p>
      </div>
    );
  }

  return (
    <div className='character-card'>
      <h4>Location</h4>
      <p>Name: {locData.name}</p>
      <p>Type: {locData.type}</p>
      <p>Dimension: {locData.dimension}</p>
      <p>Residents: {locData.residents.length}</p>
    </div>
  );
};

export default Location;
