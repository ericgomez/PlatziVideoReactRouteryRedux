const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state, //Trabajamos con el estado que ya tenemos
        myList:
          state.myList.filter(items => items.id === action.payload.id)
            .length === 0
            ? [...state.myList, action.payload]
            : [...state.myList]
      }

    case 'DELETE_FAVORITE':
      return {
        ...state, //Trabajamos con el estado que ya tenemos
        myList: state.myList.filter(items => items.id !== action.payload) //Validamos el item a liminar por id
      }

    case 'LOGIN_REQUEST':
      return {
        ...state, //Trabajamos con el estado que ya tenemos
        user: action.payload,
      }

    default:
      return state
  }
}

export default reducer
