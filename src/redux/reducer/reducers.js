const initialState = {
  notification: {
    message: "",
    show: false,
    error: true,
  },
  chart: [],
  url: ""
};

export const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
      case "SET_DATA":
        return {
          ...state,
          data: payload,
        };
      case "SET_HOME":
        return{
          ...state,
          data:payload
        }
      case "SET_URL":
        return {
          ...state,
          url: payload
        }

      case "SET_INFO":
        return{
          ...state,
          info: payload
        }

      case "SET_ORDER":
        return {
          ...state,
          product: payload
        }

      case "SET_TOKEN":
        return{
          ...state,
          token: payload
        }
        default:
            return state
      }
}