import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetRealTimeMessage = () => {
    const {socket} = useSelector(store=>store.socket);
    const dispatch = useDispatch();

    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            dispatch((dispatch, getState) => {
                const currentMessages = getState().message.messages;
                dispatch(setMessages([...currentMessages, newMessage]));
            });
        });
        return () => socket?.off("newMessage");
    },[socket, dispatch]);
};
export default useGetRealTimeMessage;