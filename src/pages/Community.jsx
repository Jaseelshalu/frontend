import React, { useState,useEffect } from 'react';
import { IoMdSend } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import io from "socket.io-client";
import instance from '../Utilities/Axios';

const Community = () => {
  
  const [open,setOpen]=useState(true)
  var name = localStorage.getItem("user");


 
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  // const socket = io("https://hadi-backend.onrender.com");
  const socket = io("http://localhost:3000");

  useEffect(() => {
    socket.on("receive_message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Fetch previous messages from backend
    const fetchMessages = async () => {
      const response = await instance.get("/chat");
      setMessages(response.data);
    };

    fetchMessages();

    return () => {
      socket.off("receive_message"); // Clean up listeners
    };
  }, []);

  const handleSend = () => {
    const message = { content: newMessage, sender: name.username };
    socket.emit("send_message", message);
    setNewMessage("");
  };




  const navigate=useNavigate()
  function handleClose(){
    setOpen(false)
    navigate('/')
  }

  console.log(name,'localStorage');
  
  return (
    <>
    {open &&

    <div
      className="hs-overlay size-full fixed top-0 start-0 z-[20] overflow-x-hidden overflow-y-auto pointer-events-auto"
      role="dialog"
      aria-labelledby="modal-label"
    
    >
      <div className="hs-overlay-open:mt-7 relative hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-100 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto ">
          <div className="flex justify-center items-center py-3 px-4 border-b dark:border-neutral-700">
            <h3 id="modal-label" className="font-bold text-center text-color1">
           Community
            </h3>
            <button
              type="button"
              className="size-8 inline-flex absolute right-4 justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
              aria-label="Close"
              onClick={handleClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <div className="flex flex-col gap-4">
            {messages.map((msg, index) => (
                msg.sender === name.username ? (
                  <div key={index}>
                    <p className="font-semibold">@you</p>
                    <p className="bg-color1 p-3 rounded-md text-color6 max-w-[80%]">{msg.content}</p>
                  </div>
                ) : (
                  <div key={index} className="ml-auto w-[80%]">
                    <p className="font-semibold">@{msg.sender}</p>
                    <p className="bg-color2 p-3 rounded-md text-color6">{msg.content}</p>
                  </div>
                )
              ))}

          </div>
          </div>
         <div className="flex mt-4">
         <input
            type="text"
            id="email"
            name="email"
            value={newMessage}
            onChange={(e)=>setNewMessage(e.target.value)}
            // value={formData.email}
            // onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Message here..."
            
          />
          <div  onClick={handleSend} className="flex items-center  bg-color3 p-4 text-color6">
          <i><IoMdSend/></i>

          </div>
          

         </div>
         
        </div>
      </div>
    </div>
    }
    </>

  );
};
export default Community