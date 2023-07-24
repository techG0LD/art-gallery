import Gallery from './Gallery'
import './App.css';
import ButtonBar from './ButtonBar'
import {useState, useEffect} from 'react'

function App() {
  let [data, setData] = useState({})
  let [artId, setArtId] = useState(6000)

  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then (resData => setData(resData))
  }, [artId])


  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div className='App'>
      <Gallery primaryImage={data.primaryImage}
       artistDisplayName= {data.artistDisplayName}
       title ={data.title}
       medium={data.medium}
       objectID={data.objectID}
       culture={data.culture} />
      <ButtonBar updateID= {handleIterate}/>
    </div>
  );
}

export default App;
