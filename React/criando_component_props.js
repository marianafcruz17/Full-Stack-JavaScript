import React, {Fragment} from 'react';
import './style.css'
import GrayImg from './gray_img'
import DescriptionWithLink from './description_with_link';

const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg'/>
        </div>
    );
}

export default Planet;