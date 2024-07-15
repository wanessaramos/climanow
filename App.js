import { useReducer } from "react";
import Context from "./src/context";
import "react-native-gesture-handler";
import Routes from "./src/routes";

const DATA = [];

const initialState = { DATA };

export default function App() {
  function reducer(state, action) {
    if (action.type === "ADD") {
      const newCity = action.payload;
      const newId = state.DATA.length;

      if (
        state.DATA.length === 0 ||
        (!state.DATA.some((city) => city.name === newCity) && newCity !== "")
      ) {
        return {
          ...state,
          DATA: [...state.DATA, { id: `${newId}`, name: `${newCity}` }],
        };
      }

      return state;
    } else {
      const cityId = action.payload;
      return {
        ...state,
        DATA: state.DATA.filter((city) => city.id !== cityId),
      };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Routes />
    </Context.Provider>
  );
}
