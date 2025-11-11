import React from 'react';
import PropTypes, { array, object } from "prop-types";
import {useState} from 'react';

const ListContacts = ({contacts, onDeleteContact}) => {
    //console.log(contacts);
    const [query, setQuery] = useState("");

    // fonction qui s'exacute quand le contenu du champ change
    const updateQuery=(query)=>{
      setQuery(query.trim());
      //console.log(query);
    }

    const showingContacts = (query) === "" ? 
    contacts : contacts.filter((contact)=>(contact.name.toLowerCase().includes(query.toLowerCase())));

    //console.log(query); // 👈 placé ici
  return (
   <div className="list-contacts">
    <div className="list-contacts-top">
      <input 
          type="text" 
          className="search-contacts" 
          placeholder='Saisir le nom du contact'
          value={query}
          onChange={(e)=>updateQuery(e.target.value)}/>
    </div>
     <div>
      <ul className='contact-list'>
         
        {
         
            showingContacts.map((contact)=>
                (
                <li key={contact.id} className='contact-list-item'>
                    <div className='contact-avatar' 
                    style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }}>
                    </div>
                    <div className='contact-details'>
                        <p>{contact.name}</p>
                        <p>{contact.handle}</p>
                        
                    </div>
                    <button className="contact-remove" onClick={()=>onDeleteContact(contact)}>Remove</button>
                </li>)
                )
        }
        </ul>
    </div>
   </div>
  )
}


ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ListContacts
