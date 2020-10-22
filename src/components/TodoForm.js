import React, {useState, useEffect, useRef} from 'react';

 const TodoForm = (props) =>{

    const [input, setinput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e) =>{
        setinput(e.target.value)
     };

    const handleSubmit = (e) =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
         setinput('');
    };

    return(
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ?(
            <>
            <input  type='text'
                placeholder='add todo'
                value={input}
                name='text'
                className='todo-input edit'
                onChange={handleChange}
                ref={inputRef}/>
                <button className='todo-button'>Update</button>
            </>
        ) : (
            <>
            <input  type='text'
                placeholder='add todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}/>
                <button className='todo-button'>Add task</button>
            </>
        )} 
    </form> 
    );
};

 export default TodoForm;