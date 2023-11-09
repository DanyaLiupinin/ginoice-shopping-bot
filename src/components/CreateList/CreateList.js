import './CreateList.css';
import { useState } from "react";

const CreateList = ({onClose, isActive, onCreate, setActive}) => {

    const [value, setValue] = useState('');

    const onCreateList = (e) => {
        e.preventDefault();
        onCreate(value)
        onClose()
    }

    return (
        <div className={`createList ${isActive ? 'createList_active' : ''}`}>
            
            <form className='createList__form'>
            <h2 className='createList__title' >your list name</h2>
                <input min={1} max={25} value={value} onChange={(e) => setValue(e.target.value)}></input>
                <div className='createLit__buttons'>
                    <button type='button' onClick={onClose}>Cancel</button>
                    <button onClick={(onCreateList)}>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateList;