import React from 'react'

const ListContacts = ({contacts, onDeleteContact}) => {
    console.log(contacts);
    
  return (
    <div>
      <ul className='contact-list'>
        {
            contacts.map((contact)=>
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
  )
}

export default ListContacts
