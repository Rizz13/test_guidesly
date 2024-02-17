"use client";
import { createContext, useReducer } from 'react';

const initialState: IntialStateTypes = {
  tripId: "",
  date: "",
  tripTimeId: "",
  activeTab: "Trip"
}

export const TripContext = createContext({
    state: initialState,
    dispatch: (_action) => {}
});

const reducer = (state, action: ActionType) => {
    switch (action.type) {
      case "Trip":
        return { ...state, tripId: action.payload };
      case "Date":
        return { ...state, date: action.payload };
      case "Time":
        return { ...state, tripTimeId: action.payload };
      case "Tab":
        return { ...state, activeTab: action.payload };
      case "ReSetTab":
        return { ...state, activeTab: "Trip" };
      default:
        return state;
    }
  };

export const TripProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <TripContext.Provider value={{ state, dispatch }}>
        {children}
      </TripContext.Provider>
    );
  };
  