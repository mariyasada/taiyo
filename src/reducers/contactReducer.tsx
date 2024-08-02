import { ContactActionTypes, ReducerInitialState,ContactType } from "../types";

const initialState: ReducerInitialState = {
  contactList: [],
};

export const contactReducer = (
  state = initialState,
  action: ContactActionTypes
) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, contactList: [...state.contactList, action.payload] };

    case "DELETE_CONTACT":
      return {
        ...state,
        contactList: state.contactList.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case "UPDATE_CONTACT":
      return {
        ...state,
        contactList: state.contactList.map((contact) =>
          contact.id === (action.payload as ContactType).id
            ? { ...contact, ...(action?.payload as ContactType) }
            : contact
        ),
      };

    default:
      return state;
  }
};
