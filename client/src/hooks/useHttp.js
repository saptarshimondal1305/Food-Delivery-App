import { useEffect,useState,useCallback } from "react";

async function sendHTTPrequest(url,config){
    const response=await fetch(url,config);
    const resData=await response.json();

    if(!response.ok){
        throw new Error(response.message||"Something Went Wrong");
    }
    return resData
}

export default function useHttp(url,config,initialValue){

    const[error,setError]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const [data,setData]=useState(initialValue)// without the inital value in the meals comp it will give error since
    // since there map func cannot func anything when it is intialized during first render.

    function clearData(){
        setData(initialValue);
    }

    const sendRequest=useCallback(async function sendRequest(data){

        setIsLoading(true);
        try{
            const resData=await sendHTTPrequest(url,{...config,body:data});
            setData(resData);

        }catch(error){
            setError(error.message||"Error Happend");
        }
        setIsLoading(false);

    },[config,url]);

    useEffect(()=>{
        if(config && ((config.method=="GET")||!config.method)|| !config){
            sendRequest();
        }
    },[sendRequest,config])

    return {
        data,
        isLoading,
        error,
        sendRequest,
        sendRequest,
        clearData
    };

}