import React, {useState} from 'react';

const AddMovie = (props) => {

  const [title, setAddTitle] = useState("");
  const [description, setAddDescription] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [errDescription, setErrDescription] = useState("");


  const isValidated = () => {
    var validate = true;

    if (title === ""){
      setErrTitle("You must add the title");
      validate = false;
    }
    else {
      setErrTitle("");
    }

    if (description === ""){
      setErrDescription("You must add the description");
      validate = false;
    }
    else {
      setErrDescription("");
    }

    return validate;

  }

  return (
    <section className={props.onAddForm ? "" : "hide"}>
      <form>
        <div className="form-control-container">

            <label htmlFor="title"> Title</label>

            <input className="form-control" type="text" id="title"  value={title} onChange={(event)=>{
                setAddTitle(event.target.value);
            }}/>
            <span className="error" >{errTitle}</span>

        </div>

        <div className="form-control-container">
            
            <label htmlFor="description"> Description</label>
            <textarea className="form-control" id="description"  value= {description} onChange={(event)=>{
                setAddDescription(event.target.value);
            }}></textarea>

            <span className="error">{errDescription}</span>
        
        </div>
    
        <div className="form-control-container">
            <button  className="btn btn-primary" type="button" onClick={()=>{
              if(isValidated()){
                const newMovie = {
                  id: Math.floor(Math.random() * 500000) + 4,
                  title,
                  description
                }

                props.onAdd(newMovie); 

                setAddTitle("");
                setAddDescription("");
              }
              
            }}>Save movie</button>
        </div>  
      </form>
    </section>
  );
};

export default AddMovie;
