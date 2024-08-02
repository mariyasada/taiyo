import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateContactScreen from "../Components/CreateContactScreen";
import DisplayContact from "../Components/DisplayContact";
import { useSelector } from "react-redux";
import { ContactType, RootState } from "../types";
import { v4 as uuidv4 } from "uuid";

const Contact = () => {
  const { contactList } = useSelector(
    (state: RootState) => state.contactReducer
  );
  const [contactFormData, setContactFormData] = useState<ContactType>({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    status: "",
  });
  const [isCreateContactClicked, setIsCreateContactClicked] =
    useState<boolean>(false);

  const [isEditItem, setIsEditItem] = useState<null | ContactType>(null);

  return (
    <div className=" w-9/12 flex  flex-wrap flex-col items-start gap-8 justify-center max-[450px]: justify-start">
      <header className="text-2xl font-semibold w-full text-center max-[450px]:text-left">
        Contact Page
      </header>
      <div className="p-5 max-w-md mx-auto text-center max-[450px]:text-left">
        {!isEditItem && !isCreateContactClicked && (
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            onClick={() => setIsCreateContactClicked(true)}
          >
            Create Contact
          </button>
        )}
        {isCreateContactClicked && (
          <CreateContactScreen
            setIsCreateContactClicked={setIsCreateContactClicked}
            isEditItem={isEditItem}
            contactFormData={contactFormData}
            setContactFormData={setContactFormData}
            setIsEditItem={setIsEditItem}
          />
        )}
        {!isCreateContactClicked && contactList?.length === 0 ? (
          <div className="mt-4 text-gray-600">
            No contact found. Please add contact from create contact button.
          </div>
        ) : (
          contactList?.map((contact: ContactType) => (
            <DisplayContact
              key={contact.id}
              contact={contact}
              setContactFormData={setContactFormData}
              setIsCreateContactClicked={setIsCreateContactClicked}
              setIsEditItem={setIsEditItem}
              isEditItem={isEditItem}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Contact;
