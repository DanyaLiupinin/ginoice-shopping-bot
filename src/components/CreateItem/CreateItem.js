import { useState } from "react";

import './CreateItem.css';

const CreateItem = ({onClose, isActive, onCreate, type}) => {

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
        <div className={`createItem ${isActive ? 'createItem_active' : ''}`}>
            <form className='createItem__form' onSubmit={onCreateList}>
            <h2 className='createItem__title' >your {type} name</h2>
                <input min={1} max={25} value={value} onChange={(e) => setValue(e.target.value)}></input>
                <div className='createLit__buttons'>
                    <button type='button' onClick={onClosePopup}>Cancel</button>
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateItem;