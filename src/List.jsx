import React from 'react'
import Person from './Person'

const List = ({user}) => {
  return (
    <main>
      <div>
        {user.map((person)=>{
          console.log(person)
           return( <Person key={person.id} {...person}/>
          )

          
        })}
      </div>
    </main>
  )
}

export default List