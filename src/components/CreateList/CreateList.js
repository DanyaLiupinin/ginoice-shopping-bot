import { useState } from "react";

import './CreateList.css';

const CreateList = ({onClose, isActive, onCreate}) => {

    const [value, setValue] = useState('');

    // добаавить валидацию и вывод ошибки
    const onCreateList = (e) => {
        e.preventDefault();
        if (!value == '') {
            onCreate(value);
            setValue('');
            onClose();
        }
    }

    const onClosePopup = () => {
        onClose();
        setValue('');
    }

    return (
        <div className={`createList ${isActive ? 'createList_active' : ''}`}>
            <form className='createList__form' onSubmit={onCreateList}>
            <h2 className='createList__title' >your list name</h2>
                <input min={1} max={25} value={value} onChange={(e) => setValue(e.target.value)}></input>
                <div className='createLit__buttons'>
                    <button type='button' onClick={onClosePopup}>Cancel</button>
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateList;