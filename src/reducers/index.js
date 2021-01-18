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
        user: action.payload
      }

    case 'LOGOUT_REQUEST':
      return {
        ...state, //Trabajamos con el estado que ya tenemos
        user: action.payload
      }

    case 'REGISTER_REQUEST':
      return {
        ...state, //Trabajamos con el estado que ya tenemos
        user: action.payload
      }

    case 'GET_VIDEO_SOURCE':
      return {
        ...state, //Trabajamos con el estado que ya tenemos
        playing: state.trends.find(item => item.id === Number(action.payload)) 
        || state.originals.find(item => item.id === Number(action.payload)) 
        || []
      }

    default:
      return state
  }
}

export default reducer
