import React, { useState ,Dispatch, SetStateAction} from "react";
import { IoClose } from "react-icons/io5";
import { ContactType } from "../types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../actions";

type displayComponentPorps = {
  contact: ContactType;
  isEditItem:ContactType |null;
  setIsEditItem:Dispatch<SetStateAction<ContactType|null>>
  setContactFormData: Dispatch<SetStateAction<ContactType>>;
  setIsCreateContactClicked: Dispatch<SetStateAction<boolean>>;
  
};

const DisplayContact = ({ contact,isEditItem,setIsEditItem,setContactFormData,setIsCreateContactClicked }: displayComponentPorps) => {
  const [isExpand, setIsExpand] = useState<ContactType | null>(null);
  const { firstName,lastName,status } = contact;
  const dispatch=useDispatch();

  const handleEdit=(contact:ContactType)=>{
    setIsEditItem(contact);
    setIsCreateContactClicked(true);
    setContactFormData(contact)
  }

  return (
    <div className="p-5 bg-gray-100 rounded-md shadow-md mt-5 ">
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <p className="text-lg font-semibold">{firstName} {lastName}</p>
        <div className="space-x-2 max-[450px]:flex">
          <button
            className="bg-blue-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => setIsExpand(contact)}
          >
            View
          </button>
          <button className="bg-yellow-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-yellow-600 transition duration-300" onClick={()=>handleEdit(contact)}>
            Edit
          </button>
          <button onClick={()=>dispatch(deleteContact(contact))} className="bg-red-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-red-600 transition duration-300">
            Delete
          </button>
        </div>
      </div>
      {isExpand?.id === contact.id && (
        <div className="bg-white p-6 rounded-md shadow-md relative">
          <p className="text-gray-700">First Name: {firstName}</p>
          <p className="text-gray-700">Last Name: {lastName}</p>
          <p className="text-gray-700">status: {status}</p>
          <IoClose
            className="cursor-pointer top-0 right-2 text-red-500 mt-2 absolute"
            onClick={() => setIsExpand(null)}
            size={25}
          />
        </div>
      )}
    </div>
  );
};

export default DisplayContact;
