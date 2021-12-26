import React, {Fragment} from 'react';
import './style.css'

const DescriptionWithLink = (props) => {
    if(!props.description){
        return null;
    }
    
    if(props.link){
        return (    
            <Fragment>
                <p {props.description}></p>
                <p>
                    <a href={props.link}>{props.link}></a>
                </p>
            </Fragment>
        );            
    }else{    
        return (    
            <Fragment>
                <p {props.description}></p>
            </Fragment>
        );
    }

}

export default DescriptionWithLink;