import { useState } from "react";
import "./App.css";
import ListContacts from "./components/ListContacts";

const App = () => {

  const removeContact =(contact)=>{
    setContacts(contacts.filter((c)=> c.id !== contact.id))

  }
    const [contacts, setContacts] = useState([{
    id: "karen",
    name: "Karen Isgrigg",
    handle: "karen_isgrigg",
    avatarURL: "/images/avatar2.jpg",
  },
  {
    id: "richard",
    name: "Richard Kalehoff",
    handle: "richardkalehoff",
    avatarURL: "/images/avatar3.jpg",
  },
  {
    id: "tyler",
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    avatarURL: "/images/avatar1.png",
  }
])
  return (
    <div>
        <ListContacts contacts={contacts} onDeleteContact={removeContact}/>
    </div>
    
  )
}
   

export default App;
