import { useState } from 'react';

const AddTask = (props) => {

    //Adding component level state - React Hooks
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text)
        {
            alert('Please add a task!');
            return;
        }

        props.onAdd({text, day, reminder})

        setText('');
        setDay('');
        setReminder(false);
    }


    return(
        <form className = 'add-form' onSubmit = {onSubmit} >
            <div className = 'form-control'>
                <label> Task </label>
                <input type = 'text' 
                value = {text}
                placeholder = 'Add Task'
                onChange = {e => 
                    {   
                       if(e.target.value.length < 27)
                         setText(e.target.value)
                       else{
                         setText('')
                         alert('Please be concise - Write tasks briefly');
                       }
                    }
                    }
                 /> 
                
            </div>
            <div className = 'form-control'>
                <label> Day and Time </label>
                <input type = 'text' 
                placeholder = 'Add Day and Time'
                value = {day}
                onChange = {e => setDay(e.target.value)} />
            </div>
            <div className = 'form-control form-control-check'>
                <label> Set Reminder </label>
                <input type = 'checkbox'
                checked = {reminder}
                value = {reminder}
                onChange = {e => setReminder(e.currentTarget.checked)} />
            </div>
            <input type = 'submit' value = 'Save' className = 'btn btn-block' />
        </form>
    )
}

export default AddTask;