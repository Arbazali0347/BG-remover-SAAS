import { createContext, useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";


export const AppContext = createContext();
export const AppContextProvider = (props) => {

    const [credit, setCredit] = useState(false);
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const { getToken } = useAuth();

    const loadCreditsData = async () => {
        try {
            const token = await getToken()
            const {data} = await axios.post(backendURL+`/api/user/credits`, {},{headers: {token}})
            if (data.success) {
                setCredit(data)
                toast.success("Credits data loaded: " + data.credits)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    const value = {
        credit,setCredit,
        loadCreditsData,
        backendURL
    };

    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider;