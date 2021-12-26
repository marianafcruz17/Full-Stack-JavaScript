import React, {Fragment, useState, useEffect} from 'react';
import Planet from './planet';
import Form from './form';

async function getPlanets(){
    let response = await fetch('http://localhost:3000/planets.json')
    let data = await response.json()
    return data;
}

const Planets = () => {
    const [planets,setPlanets] = useState([
        {
            "id": "mars",
            "name": "Mars",
            "description": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.",
            "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg",
            "link": "https://en.wikipedia.org/wiki/Mars"
        }
    ])

   useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
   }, [])

   const addPlanet = (new_planet) => {
       setPlanets([...planets,new_planet])
   }

    const removeLast = () => {
        let new_planets = [...planets]
        new_planets.pop()
        setPlanets(new_planets)
    }

    const duplicateLastPlanet = () => {
        let last_planet = planets[planets.length - 1]
        setPlanets([...planets, last_planet])
    }

    return(
        <Fragment>
        <h3>Planet list:</h3>
        <hr/>
        <form addPlanet={addPlanet}/>
        <hr/>
        {planets.map((planet) =>
            <Planet
                name={planet.name}
                description={planet.description}
                img_url={planet.img_url}
            />  
        )}
        
        </Fragment>
    )
}

const Planets = () => {
        
}

export default Planets;