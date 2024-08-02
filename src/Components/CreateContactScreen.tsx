import React, { Dispatch, SetStateAction, useState } from "react";
import { IoClose } from "react-icons/io5";
import { ContactType } from "../types";
import { useDispatch } from "react-redux";
import { addContact, updatedContact } from "../actions";
import { v4 as uuidv4 } from "uuid";

type ComponentProps = {
  setIsCreateContactClicked: Dispatch<SetStateAction<boolean>>;
  isEditItem: ContactType | null;
  setContactFormData: Dispatch<SetStateAction<ContactType>>;
  contactFormData: ContactType;
  setIsEditItem:Dispatch<SetStateAction<ContactType|null>>
};

const CreateContactScreen = ({
  setIsCreateContactClicked,
  isEditItem,
  setContactFormData,
  contactFormData,
  setIsEditItem
}: ComponentProps) => {
  const dispatch = useDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = () => {
    const { firstName, lastName, status } = contactFormData;
    if ([firstName, lastName, status].some((field) => field.trim() === "")) {
      alert("please fill the details in fields");
    } else {
      if (!isEditItem) {
        dispatch(addContact(contactFormData));
      } else {
        dispatch(updatedContact(contactFormData));
        setIsEditItem(null)
      }
      setContactFormData({
        id: uuidv4(),
        firstName: "",
        lastName: "",
        status: "",
      });
      setIsCreateContactClicked(false);
    }
  };

  return (
    <div className="p-7 bg-gray-100 rounded-md shadow-md mt-6 relative max-[450px]:w-[280px]">
      <h2 className="text-2xl font-bold mb-5 max-[450px]:text-sm">
        {isEditItem ? "Edit Contact Screen" : "Create Contact Screen"}
      </h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3 max-[450px]:flex-col max-[450px]:items-start max-[450px]:space-x-1 max-[450px]:gap-2">
          <label className="w-32">First Name:</label>
          <input
            onChange={onChangeHandler}
            className="flex-1 p-2 border border-gray-300 rounded-md"
            required
            name="firstName"
            value={contactFormData.firstName}
          />
        </div>
        <div className="flex items-center space-x-3 max-[450px]:flex-col max-[450px]:items-start max-[450px]:space-x-1 max-[450px]:gap-2">
          <label className="w-32">Last Name:</label>
          <input
            onChange={onChangeHandler}
            className="flex-1 p-2 border border-gray-300 rounded-md"
            required
            name="lastName"
            value={contactFormData.lastName}
          />
        </div>
        <div className="flex items-center space-x-3">
          <label className="w-32">Status:</label>
          <div className="flex space-x-3 items-center text-center ">
            {["Active", "Inactive"].map((status) => (
              <div
                key={status}
                className="flex items-center text-center space-x-1 "
              >
                <input
                  type="radio"
                  checked={contactFormData.status === status}
                  value={status}
                  name="status"
                  required
                  className="cursor-pointer"
                  onChange={onChangeHandler}
                />
                <label>{status}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="mt-5 w-full py-2 bg-blue-500 text-white font-semibold rounded-md"
        onClick={submitHandler}
      >
        {isEditItem ? "Update Contact" : "Save Contact"}
      </button>
      <IoClose
        className="absolute text-black-500 top-2 right-2 cursor-pointer"
        size={30}
        onClick={() => setIsCreateContactClicked(false)}
      />
    </div>
  );
};

export default CreateContactScreen;
