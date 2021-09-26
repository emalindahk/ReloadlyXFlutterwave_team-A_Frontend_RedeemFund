import { useState, createContext, useContext } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [data, setData] = useState({});
  const [campaignData, setCampaignData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [userData, setUserData] = useState([]);

  function submitData(){
    setFinalData(finalData =>[...finalData, campaignData]);
    setUserData('')
  }

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues, campaignData, setCampaignData, finalData, setFinalData, submitData,
    userData, setUserData }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);