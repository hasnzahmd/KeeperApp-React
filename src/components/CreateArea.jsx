import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [noteData,setNoteData] = useState({title:"",content:""})

  const handleChange = (event)=>{
    const {name,value} = event.target;
    setNoteData((prev)=>{
      return{
        ...prev,
        [name]: value
      }
    })
  }

  function handleClick(event){
    props.addNote(noteData);
    setNoteData({title:"",content:""}); 
    event.preventDefault();
  }

  const [expanded,setExpanded] = useState(false);

  return (
    <div>
      <form className="create-note">
        {expanded && (
          <input name="title" placeholder="Title" onChange={handleChange} value={noteData.title} />
        )}
        <textarea name="content" placeholder="Take a note..." rows={!expanded ? '1':'3'} onChange={handleChange} value={noteData.content} onClick={()=>{setExpanded(true);}}/>
        {expanded && (
          <Zoom in={expanded}>
            <Fab onClick={handleClick}>
              <AddIcon/>
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
