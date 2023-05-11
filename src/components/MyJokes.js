import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from 'axios';
export const Jokes = () =>{
    const {data: jokes, isLoading, isError, refetch} = useQuery(["joke"], () =>{
        return Axios.get("https://official-joke-api.appspot.com/random_joke").then((res) => res.data);
    });

    if(isError)
    { return <h1> Sorry, there was an error</h1>;}

    if(isLoading)
    { return <h1> Loading....</h1>;}
    
    return(
        <div>
            <h1>Dont get Bored</h1>
            <p> {jokes.setup}</p>
            <button onClick={refetch}>Next Joke</button>
        </div>
    ) 
}