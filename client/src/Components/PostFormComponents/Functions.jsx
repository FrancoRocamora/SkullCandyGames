import axios from 'axios'



export const validateGameName = (form,error,setError) => {
    if(!form.name) {setError({...error, name: 'Name required'})}
    else {
        if(form.name.length >= 30) {setError({...error, name: 'Max characters: 30'})}
        else {
            setError({...error, name: ''})
        }
    }
}


export const validateDescription =  (form,error,setError) => {
    if(!form.description) {setError({...error, description: 'Description required'})}
    else {
        if(form.description.length > 300) setError({...error, description: "Max chars in description: 300"})
        else {
            if(form.description.length < 30) setError({...error, description: "Min chars in description: 30"})
            else {
                setError({...error, description: ''})
            }
        }
    }
}


export const validateRelease = (form, error, setError) => {
    if(!form.released) {
        setError({...error, released: 'Select a release date'})
    } else {
        setError({...error, released: ''})
    }
}


export const validatePlayTime = (form, error, setError) => {
    if(!form.playtime){
        setError({...error, playtime: 'Hours of gameplay are required'})
    } else {
        setError({...error, playtime: ''})
    }
}


export const validateImage =(form, error, setError) => {
    const urlPattern = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
    if(!form.background_image){
        setError({...error, background_image: 'Image is required'})
    } else {
        if(!urlPattern.test(form.background_image)) setError({...error, background_image: 'Inser a valid URL'})
        else  setError({...error, background_image: ''})
    }
}

export const validateStores = (form, error, setError) => {
    if(!form.platforms){ setError({...error, platforms: 'Include at least one'})}
    else{
        if(form.platforms.includes(",") || form.platforms.includes('.')){
            setError({...error, platforms: 'Dont use commas or dots '})
        }else {
            setError({...error, platforms: ''})
        }
    }
}

export const validateDevs = (form, error, setError) => {
    if(!form.developer){setError({...error, developer: 'Devs/company name is required'})}
    else{
         setError({...error, developer: ''})
    }
}

export const validateGenres = (form, error, setError) => {
    if(!form.genres.length){ setError({...error, genres: 'Select at least one genre'})}
    else{
         setError({...error, genres: ''})
    }
}


export const validateTags = (form, error, setError) => {
    if(!form.tags){ setError({...error, tags: 'Include at leats one tag'})}
    else{
        if(form.tags.includes(",") || form.tags.includes('.')){
            setError({...error, tags: 'Dont use commas or dots'})
        }else {

            setError({...error, tags: ''})
        }
    }
}


export const sendPost =  async (form, func, param) => {
    const response = await axios.post('http://localhost:3001/videogames', form)
    await func(param())
    return response
}
