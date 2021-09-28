import { useState, createContext, useContext } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [shareData, setShareData] = useState({});
  const [campaignData, setCampaignData] = useState([]);
  const [userData, setUserData] = useState([]);

  function clearData(){
    setCampaignData(''); 
  }


  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ shareData,setShareData, setFormValues, campaignData, setCampaignData, clearData,
    userData, setUserData }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);