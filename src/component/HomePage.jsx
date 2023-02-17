import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import {data} from '../data.js';



const HomePage = () => {

    const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  return (
    <div className='"homepage"'>
    <h1>All Shows</h1>
      <table>
        <thead>
          <tr>
            <th>Show Name</th>
            <th>Genres</th>
            <th>Language</th>
            <th>Premiered</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
        
          {shows.map(show => (
            <>
            
            <tr key={show.show.id}>
            
            
              <td>{show.show.name}
             
              
              </td>
              
              <td>{show.show.genres.join(', ')}</td>
              <td>{show.show.language}</td>
              <td>{show.show.premiered}</td>
              <td>
                <button className='summary-button' onClick={() => navigate(`/show/${show.show.id}`)}>Summary</button>
               

              </td>
              
            </tr>
            
            </>
          ))}
          
          
        </tbody>
      </table>
    
    </div>
  )
}

export default HomePage