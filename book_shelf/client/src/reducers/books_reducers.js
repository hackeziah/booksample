export default function (state = null, action) {
    switch (action.type) {
        case 'GET_BOOKS':
            return { ...state, list: action.payload }
        case 'GET_BOOK_W_REVIEWER':
            return {
                ...state,
                book: action.payload.book,
                reviwer: action.payload.reviwer
            }
        case 'CLEAR_BOOK_W_REVIEWER':
            return {
                ...state,
                book: action.payload.book,
                reviwer: action.payload.reviwer
            }
        case 'ADD_BOOK':
            return {
                ...state, newbook: action.payload
            }
        case 'CLEAR_NEWBOOK':
            return {
                ...state, newbook: action.payload
            }
        case 'GET_BOOK':
            return {
                ...state, book: action.payload
            }
        case 'UPDATE_BOOK':
            return {
                ...state, updateBook: action.payload
            }
        case 'DELETE_BOOK':
            return {
                ...state, postDeleted: action.payload
            }
        default: state;
    }
}



// export default function (state = null, action) {
//     switch (action.type) {
//         case 'GET_USERS':
//             return { ...state, list: action.payload }

//     }
// }