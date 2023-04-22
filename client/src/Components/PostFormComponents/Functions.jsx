import axios from 'axios'

export const validateGameName = (form,error,setError) => {
    if(!form.name) {setError({...error, name: 'Hey, come back, need a name here!'})}
    else {
        if(form.name.length >= 30) {setError({...error, name: 'Oops, forget to warn you, max chars: 30'})}
        else {
            setError({...error, name: ''})
        }
    }
}


export const validateDescription =  (form,error,setError) => {
    if(!form.description) {setError({...error, description: 'Stop doing that. What is your game about??'})}
    else {
        if(form.description.length > 300) setError({...error, description: "C'mon man, don't make me read that. Max chars: 300"})
        else {
            setError({...error, description: ''})
        }
    }
}


export const validateRelease = (form, error, setError) => {
    if(!form.released) {
        setError({...error, released: 'Wait... Is not even released?'})
    } else {
        setError({...error, released: ''})
    }

}


export const validatePlayTime = (form, error, setError) => {
    if(!form.playtime){
        setError({...error, playtime: 'Not even a hour of game? Devs nowdays...'})
    } else {
        setError({...error, playtime: ''})
    }
}


export const validateImage =(form, error, setError) => {
    const urlPattern = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
    if(!form.background_image){
        setError({...error, background_image: 'WHY ARE YOU LIKE THIS?'})
    } else {
        if(!urlPattern.test(form.background_image)) setError({...error, background_image: 'Sigh... Url, please....'})
        else  setError({...error, background_image: ''})
    }
}

export const validateStores = (form, error, setError) => {
    if(!form.stores){ setError({...error, stores: ' '})}
    else{
         setError({...error, stores: ''})
    }
}

export const validateDevs = (form, error, setError) => {
    if(!form.developer){setError({...error, developer: 'Someone made te game!'})}
    else{
         setError({...error, developer: ''})
    }
}

export const validateGenres = (form, error, setError) => {
    if(!form.genres.length){ setError({...error, genres: 'Select at leat one'})}
    else{
         setError({...error, genres: ''})
    }
}


export const validateTags = (form, error, setError) => {
    if(!form.tags){ setError({...error, tags: 'No tags?'})}
    else{
         setError({...error, tags: ''})
    }
}


export const sendPost =  async (form, func, param) => {
    await axios.post('http://localhost:3001/videogames', form)
    await func(param())}
