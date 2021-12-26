const handleFielsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });