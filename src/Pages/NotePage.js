import { useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../Assets/arrow-left.svg'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

return (
    <div className='note'>
    <div className='note-header'>
      <h3>
      <Link to= '/'>
        <ArrowLeft onClick={handleSubmit}/>
      </Link>
      </h3>

      <Link to= '/'>
    { params.id !=='new' ? (
      <button onClick={deleteNote}>Delete</button>

    ):(
      <button onClick={handleSubmit}>Done</button>
    ) }

      </Link>

    </div>

    <textarea onChange={e =>{setNotes({...notes, 'body': e.target.value})}} value={notes.body}></textarea>
    </div>
  )
}

export default NotePage