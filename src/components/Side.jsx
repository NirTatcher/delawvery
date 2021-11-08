import React, { useState } from 'react'
import Card from './Card'
export default function Side(props) {
    const firstName = useState("ניר")
    const lastName = useState("טצ'ר")
    const date = useState("19/11/1995")
    return (
        <div className="side">
          
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 className="order-heading">רשימת הזמנות</h1>
          <div className="num_of_orders_wrapper">
            <h3 style={{ fontSize: '15px' }}>{props.persons.length}</h3>
            <h3 style={{ fontSize: '15px' }} > :מספר הזמנות</h3>
          </div>
        </div>
        {props.persons.map((person,index)=>
            <Card key={index} editPerson={props.editPerson}  deletePerson={props.deletePerson} index={index} personDetails={{firstName:person.firstName,lastName:person.lastName,date:person.date}}/>
        )}

      </div>
    )
}
