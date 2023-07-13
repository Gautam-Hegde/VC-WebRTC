import React,{useEffect} from 'react'
import { useSocket } from '../context/SocketProvider';

const RoomPage = () => {

const socket=useSocket();

  return (
    <div>
        Room Page
        </div>
  )
}

export default RoomPage;