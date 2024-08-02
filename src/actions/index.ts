import { ContactType } from "../types";

export const addContact = (contact:ContactType) => {
    return {type:"ADD_CONTACT",payload:contact}
  };

export const deleteContact=(contact:ContactType)=>{
    return {type:"DELETE_CONTACT",payload:contact.id}
}  
export const updatedContact=(contact:ContactType)=>{
    return {type:"UPDATE_CONTACT",payload:contact}
}  