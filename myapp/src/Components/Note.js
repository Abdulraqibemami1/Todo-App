import React, { useState } from 'react'
import '../Components/note.css'
const Note = () => {
  const [notes, setNote] = useState([])

  const [input, setInput] = useState('')
  const [textaree, setTextarea] = useState('')
  const addTolist = () =>{
    if(!input && !textaree) return 
    setNote(prev => {
     return  [...prev,{title:input,description:textaree ,id:Math.floor(Math.random() * 10000 + 1)}]
    })
    setInput('')
    setTextarea('')
  }
  const deleteTodo = (id) => {
    setNote(notes.filter((value) => {
      return value.id !== id;
    }))
  }
  return (
    <div>
      <div className="note">
        <input type="text" placeholder='Title' value={input} onChange={(e) => setInput(e.target.value)} />
        <textarea name="" id="" cols="10" rows="4" placeholder='Description' value={textaree} onChange={(e) => setTextarea(e.target.value)} />
        <button className='plus' onClick={addTolist}>+</button>
      </div>

<div className="notes">
      {notes.length !== 0 ? notes.map((note, index) => (
        <div className="list" key={index}>
          <h2 className='title'>{note.title}</h2>
          <p className='paragraph'>{note.description}</p>
          <span className="btn" onClick={() => deleteTodo(note.id)}>X</span>
        </div>
      )) : ''}
    </div>

</div>
  )
}

export default Note
