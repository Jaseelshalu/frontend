import React, { createContext,useState } from 'react'


export const ModalContaxtProvider=createContext()
const ModalContext = ({children}) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModaldata] = useState({});
  const [lodingBtn, setLoadingBtn] = useState(true);

  return (
    <div>
        <ModalContaxtProvider.Provider value={{modalOpen,setModalOpen,modalData,setModaldata,lodingBtn,setLoadingBtn}}>
            {children}
        </ModalContaxtProvider.Provider>
    </div>
  )
}

export default ModalContext