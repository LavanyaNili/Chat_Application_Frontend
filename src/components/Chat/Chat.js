import React,{useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

//crete a variable to be stored outside our component

let socket;
const Chat =({location}) =>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT='localhost:5000';

    useEffect(()=>{
      
        //location is fed from the react router which has a prop called loctaion
        const {name, room} =queryString.parse(location.search);

        //now we need to store the first connection made
        socket=io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit('join', {name,room}, () =>{

        });
        return  () =>   {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);
    return (
        <h1>Hello Chat</h1>

    )
    }
    export default Chat;

