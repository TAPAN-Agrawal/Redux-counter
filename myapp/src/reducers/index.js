import {counter} from './Counter-reducer'
import { combineReducers } from 'redux'


export  const allReducers = combineReducers({
    count: counter
})