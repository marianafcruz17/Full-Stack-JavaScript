import React, {Fragment, useState, useEffect} from 'react';
import './style.css'
import GrayImg from './gray_img'
import DescriptionWithLink from './description_with_link';
import Form from './criando_form_controlado';
import {useParams,useHistory,Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Planet = () => {
    const [planet, setPlanet] = useState({});
    const [redirect,setRedirect] = useState(false);
    let {id} = useParams();
    let history = useHistory();

    useEffect(() => {
        getPlanet(planet.id).then(data => {
            setSatellites(data['satellites'])
            setPlanet(data['data']);
        }, error => {
            setRedirect(true);
        })
    }, [])

    const goToPlanets = () => {
        history.push('/');
    }
    
    let title;
    if(planet.title_with_underline){
        title = <h4><ul>{planet.name}</ul></h4>
    }else{
        title = <h4>{planet.name}</h4>
    }

    if(redirect){
        return <Redirect to='/'/>
    }

    return (
        <div onClick={clickOnPlanet}>
            <Link to={'/planet/${props.id}'}>
                <h4>{title}</h4>
            </Link>
            <DescriptionWithLink description={planet.description} link={planet.link}/>
            <GrayImg img_url={planet.img_url} gray={planet.gray}/>
            <hr/>
            <button type='button' onClick={goToPlanets}>Voltar a listagem</button>
        </div>
    );    
}

export default Planet;