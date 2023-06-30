const initialState={
    c:0,
    msg:"",
    arr:[1,2,3,4,5]
}

// state={
//     count:0
// }


export const counter = (state=initialState,action)=>{

    switch(action.type){

        case 'INCREMENT':
        return {
            ...state,
            c : state.c+1
        };

        case 'DECREMENT':
        return {
            ...state,
            c: state.c - 1
        };

        case 'ADD':
        return {
             ...state,
             msg : state.msg + action.payload
        }

        case 'ADD_ARRAY':
        return{
            ...state,
            arr:[...state.arr,...action.payload]
        }

        default:
        return state;
    }
}