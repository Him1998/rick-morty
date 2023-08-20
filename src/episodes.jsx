import React, { useState, useEffect } from 'react';

const Episodes = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [epData, setepData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setepData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return <p>Loading episodes data...</p>;
  }

  if (error) {
    return(
        <span>Unknown</span>
    );
  }

  return (<span>$-{epData.name}-$</span>
  );
};

export default Episodes;
