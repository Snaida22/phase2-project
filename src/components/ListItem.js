import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
}
let getTitle = (note) => {
    //spit by new lines and just get the first line
    //split will make a list of each line and will only pull on the first line by index zero

    const title = note.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}

const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
                <h3>{getTitle(note)}</h3>
                <p><span>{getTime(note)}</span></p>
            </div>
        </Link>
    )
}

export default ListItem