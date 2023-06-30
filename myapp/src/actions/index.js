export const increment = ()=>{
    return {
        type: 'INCREMENT'
    }
}

export const decrement = ()=>{
    return {
        type: 'DECREMENT'
    }
}

export const add = (text) =>{
    return {
        type: 'ADD',
        payload: text

    }
}

export const addArray = (data)=>{
    return {
        type: 'ADD_ARRAY',
        payload: data
    }
}