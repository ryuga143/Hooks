
import react from "react";
import { useState,useEffect } from "react";

const Useeffecthook = () => {

    const[city, setCity] = useState('Chennai');

    useEffect ( ()=>{                       // without this useEffect hook as per the if & else conditions , we get infinite loop 

        if (city === 'Chennai'){
            setCity('Bangalore');
        }
        else{
            setCity('mumbai');
        }
    
    }, [] )

    
    return (
        <div>
            {city}
        </div>


    );
    
}

export default Useeffecthook;