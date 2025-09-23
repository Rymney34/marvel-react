import { useState, useCallback} from "react"

export const useHttp = () => {
     const [loading, setLoad] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback(async (url, method = 'GET', body=null, headers={'content-type': 'application/json'}) => {

        setLoad(true);

        try{
            const response = await fetch(url, {method, body, headers});

             if(!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);

            }
            const data = await response.json();

             setLoad(false);
             return data
        }catch(e){
            setLoad(false);
            
        }

    },[])

    return {loading, request}
}