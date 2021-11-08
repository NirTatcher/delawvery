import React from 'react'
import Card from './Card'
export default function Side(props) {

  return (
    <div className="side">

      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 className="order-heading">רשימת הזמנות</h1>
        <div className="num_of_orders_wrapper">
          <h3 style={{ fontSize: '15px' }}>{props.persons.length}</h3>
          <h3 style={{ fontSize: '15px' }} > :מספר הזמנות</h3>
        </div>
      </div>
      <div className="cardsWrapper">
        {props.persons.map((person, index) =>
        <div className="cardWrapper" >
          <Card key={index} editPerson={props.editPerson} deletePerson={props.deletePerson} index={index} personDetails={{ firstName: person.firstName, lastName: person.lastName, date: person.date }} />
          </div>
        )}
      </div>
    </div>
  )
}
