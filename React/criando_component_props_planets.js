import React, {Fragment} from 'react';
import Planet from './criando_component_props';

const Planets = () => {
    return (
        <Fragment>
            <h3>Planet list:</h3>
            <Planet
                name='Mercurio'
                description='Mercurio é o menor [nota 1][nota 2] e mais interno planeta do Sistema Solar'
                img_url='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg'
                link='https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)'
            />
        </Fragment>
    );
}

export default Planets;