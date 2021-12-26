import React, {Fragment, useState, useEffect} from 'react';
import './style.css'
import GrayImg from './gray_img'
import DescriptionWithLink from './description_with_link';
import Form from './criando_form_controlado'

async function getSatellites(id){
    let response = await fetch('http://localhost:3000/${id}.json')
    let data = await response.json();
    return data;
}

const Planet = (props) => {
    const [satellites,setSatellites] = useState([]);

    useEffect(() => {
        getSatellites(props.id).then(data => {
            setSatellites(data['satellites'])
        })
    }, [])

    const addSatellite = (new_satellite) => {
        setSatellite([...satellites,new_satellite])
    }

    let title;
    if(props.title_with_underline){
        title = <h4><ul>{props.name}</ul></h4>
    }else{
        title = <h4>{props.name}</h4>
    }

    return (
        <div onClick={clickOnPlanet}>
            <h4>{title}</h4>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg' gray={props.gray}/>
            <h4>Satelites</h4>
            <hr/>
            <form addSatellite={addSatellite}/>
            <hr/>
            <ul>
                {satellites.map((satellite,index) => 
                    <li key={index}>{satellite.name}</li>
                )}
            </ul>
            
            <hr/>
        </div>
    );    
}

const Planet = (props) => {
    const names = ['a','b','c','d']
}

export default Planet;