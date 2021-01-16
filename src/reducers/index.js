const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state, //Traajamos con el estado que ya tenemos
        myList: [...state.myList, action.payload]
      }

    case 'DELETE_FAVORITE':
      return {
        ...state, //Traajamos con el estado que ya tenemos
        myList: state.myList.filter(items => items.id !== action.payload)
      }

    default:
      return state
  }
}

export default reducer
