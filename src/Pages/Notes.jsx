import React, { useRef, useReducer } from "react";
import './Notes.css';
import FormCard from "../Components/Formcard/Formcard";

const INITIAL_STATE = {
    title: "",
    description: "",
    endDate: "",
    endTime: "",
};

const INITIAL_COMPONENT_STATE = {
    notes: [],   
};

function reducer(state, action) {
    if(action.type === 'HANDLE_ADD_NOTES'){
        let notesCopy = [...state.notes];
        notesCopy.push({
            ...INITIAL_STATE,
            title: action.payload,
            description: action.payload,
        });
        return{
            notes: notesCopy,
        };
    } else if(action.type === 'HANDLE_NOTES_UPDATE'){
        const notesCopy = [...state.notes];
            let matchedData = notesCopy.find((data) => data.id === action.payload);
            matchedData.completed =!matchedData.completed;
            return {
                notes: notesCopy,
            }
    } else if(action.type === 'HANDLE_SAVE_NOTE'){
        
        let notesCopy = [...state.notes];
        notesCopy.push({
            ...INITIAL_STATE,
            title: action.payload,
            description: action.payload,
        });
        return{
            notes: notesCopy,
           
        };
        // console.log(notes);
    }
}

export default function Notes() {
    const taskRef = useRef(null);
    const [state, dispatch] = useReducer(reducer, INITIAL_COMPONENT_STATE);
    
    // const [formData, setFormData] = useState(INITIAL_STATE);


    function handleChange(e) {
        console.log(taskRef);
        dispatch({type: 'HANDLE_ADD_NOTES', payload:taskRef.current.value})
        taskRef.current.value = "";
    }

    function handleEditClick(e, taskId) {
        if (e && taskId) {
            dispatch({type: 'HANDLE_NOTES_UPDATE', payload: taskId})
        }
    }

    function handleSaveTask(e, taskId) {
        if (e && taskId) {
            dispatch({type: 'HANDLE_SAVE_NOTE', payload: taskId})
        }
    }

    return (
        <div>
            <div className="container">
                <FormCard 
                    handleChange={handleChange}
                    handleSubmit={handleSaveTask}
                    values={taskRef}
                    type="Notes"
                    
                />
                <div className="card listing-container" style={{textAlign:"start"}}>
                    <div className="card-body">
                        {state.notes.map((data,index) => (
                            <div 
                                className="task-item mb-2 row"
                                key={`${data.title}-${index}`}
                            >
                                <div className="col-8 prefix">
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                </div>
                                <div className="col-4 suffix" >
                                    <button 
                                        className="btn btn-primary"
                                        onClick={(e) => handleEditClick(e)}
                                        >
                                        Edit
                                    </button>
                                    <button className="btn btn-danger">
                                        Delete
                                    </button>

                                </div>

                            </div>
                        ))}
                        

                    </div>

                </div>

            </div>







            {/* <div className="notes-container">
                <div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">
                            <p>Add a Note</p>
                            <p>Title</p>
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>

            </div> */}







        </div>
    );
}