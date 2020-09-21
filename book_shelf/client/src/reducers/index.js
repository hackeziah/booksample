import { combineReducers } from 'redux';
import books from './books_reducers';
import users from './users_reducers';

const rootReducers = combineReducers({
    books,
    users
})

export default rootReducers;