import './App.css';
import { useEffect, useState } from 'react';
import Origin from './orgin';
import Location from './location';
import Episodes from './episodes';

function App() {

  const [page , setpage] = useState(1)
  async function fetchData(){
    const response =await fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(data=>data.json())
    .then(res=>res.results)
    console.log(response)
    setdata(response);
  }

  // const Location = async (url) => {
  //   const locData = await fetch(url).then(res=>res.json())
  //   return(
  //     <div className='character-card'>
  //       <h4>Location</h4>
  //       <p>{locData.name}</p>
  //       <p>{locData.type}</p>
  //       <p>{locData.dimension}</p>
  //       <p>{locData.residents.length}</p>
  //     </div>
  //   )
  // }

  const [data , setdata] = useState([]);

  //to fetch data
  useEffect(()=>{
    fetchData();
  }, [page])


  //to create one card
  const CharacterCard = ({ character }) => {
    let OriginUrl = character.origin.url
    let locationUrl = character.location.url
    return (
      <div className="character-card">
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <Origin url = {OriginUrl} />
        <Location url = {locationUrl} />
        <div className="character-card">
          <h4>Chapter Names</h4>
          {character.episode.map(ep => (
            <Episodes url={ep} />
          ))}
        </div>
      </div>
    );
  };
  
  //to load display all cards
  const CharacterList = ({ characters }) => {
    return (
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Rick and Morty Characters </h1>
      <CharacterList characters={data} />

      <div className='buttonContainer'>
        <button>1</button>
        <button onClick={()=>{setpage(2)}}>2</button>
        <button onClick={()=>{setpage(3)}}>3</button>
        <button onClick={()=>{setpage(4)}}>4</button>
        <button onClick={()=>{setpage(5)}}>5</button>
        <button onClick={()=>{setpage(6)}}>6</button>
        <button onClick={()=>{setpage(7)}}>7</button>
        <button onClick={()=>{setpage(8)}}>8</button>
        <button onClick={()=>{setpage(9)}}>9</button>
        <button onClick={()=>{setpage(10)}}>10</button>
        <button onClick={()=>{setpage(11)}}>11</button>
        <button onClick={()=>{setpage(12)}}>12</button>
        <button onClick={()=>{setpage(13)}}>13</button>
        <button onClick={()=>{setpage(14)}}>14</button>
        <button onClick={()=>{setpage(15)}}>15</button>
        <button onClick={()=>{setpage(16)}}>16</button>
        <button onClick={()=>{setpage(17)}}>17</button>
        <button onClick={()=>{setpage(18)}}>18</button>
        <button onClick={()=>{setpage(19)}}>19</button>
        <button onClick={()=>{setpage(20)}}>20</button>
        <button onClick={()=>{setpage(21)}}>21</button>
        <button onClick={()=>{setpage(22)}}>22</button>
        <button onClick={()=>{setpage(23)}}>23</button>
        <button onClick={()=>{setpage(24)}}>24</button>
        <button onClick={()=>{setpage(25)}}>25</button>
        <button onClick={()=>{setpage(26)}}>26</button>
        <button onClick={()=>{setpage(27)}}>27</button>
        <button onClick={()=>{setpage(28)}}>28</button>
        <button onClick={()=>{setpage(29)}}>29</button>
        <button onClick={()=>{setpage(30)}}>30</button>
        <button onClick={()=>{setpage(31)}}>31</button>
        <button onClick={()=>{setpage(32)}}>32</button>
        <button onClick={()=>{setpage(33)}}>33</button>
        <button onClick={()=>{setpage(34)}}>34</button>
        <button onClick={()=>{setpage(35)}}>35</button>
        <button onClick={()=>{setpage(36)}}>36</button>
        <button onClick={()=>{setpage(37)}}>37</button>
        <button onClick={()=>{setpage(38)}}>38</button>
        <button onClick={()=>{setpage(39)}}>39</button>
        <button onClick={()=>{setpage(40)}}>40</button>
        <button onClick={()=>{setpage(41)}}>41</button>
        <button onClick={()=>{setpage(42)}}>42</button>
    </div>

    </div>
  );
}

export default App;
