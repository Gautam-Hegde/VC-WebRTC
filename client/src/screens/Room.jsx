import React,{useCallback, useEffect,useState} from 'react'
import { useSocket } from '../context/SocketProvider';

const RoomPage = () => {

const socket=useSocket();

const handleUserJoined=useCallback(({email,id})=>{
console.log(`Email ${email} joined the room`);
},[])

useEffect(()=>{
socket.on('user:joined',handleUserJoined);
return()=>{
    socket.off('user:joined',handleUserJoined);
}
},[socket,handleUserJoined]);

  return (
    <div>
        Room Page
        </div>
  )
}

export default RoomPage;