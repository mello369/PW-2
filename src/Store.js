import React,{useState} from 'react';

export const context = React.createContext();

const Store = ({children}) =>{
    const [userId,setUserId] = useState(null);
    return (<Context.Provider value={[userId,setUserId]}>{children}</Context.Provider>
        )
}

export default Store;