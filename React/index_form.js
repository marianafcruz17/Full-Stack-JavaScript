import React, {Fragment,useState} from 'react';

const initialState = {
    name: '',
    description: '',
    link: '',
    img_url: ''
}

const Form = (props) => {
    const [fields,setFields] = useState(initialState)

    const handleFielsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = event => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(initialState)
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type='text' name='name' value={name} onChange={handleFielsChange}></input>
                </div>
                <br/>
                <div>
                    <label htmlFor='description'>description:</label>
                    <input id='description' type='text' description='description' value={description} onChange={handleFielsChange}></input>
                </div>
                <br/>
                <div>
                    <label htmlFor='link'>link:</label>
                    <input id='link' type='text' name='link' value={description} onChange={handleFielsChange}></input>
                </div>
                <br/>
                <div>
                    <label htmlFor='img_url'>img_url:</label>
                    <input id='img_url' type='text' name='img_url' value={description} onChange={handleFielsChange}></input>
                </div>
                <br/>
                <input type='submit'/>  
            </form>
        </Fragment>
    )
}

export default Form;