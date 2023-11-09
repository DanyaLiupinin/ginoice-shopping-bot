import { useState } from "react";

import './EditItem.css';

const EditItem = ({onClose, isActive, onSubmit, prevValue}) => {

    const [value, setValue] = useState('');

    // добаавить валидацию и вывод ошибки
    const onCreateList = (e) => {
        e.preventDefault();
        if (!value == '') {
            onSubmit(value);
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
            <h2 className='createItem__title'>new name for {prevValue}</h2>
                <input minLength={1} maxLength={25} value={value} onChange={(e) => setValue(e.target.value)}></input>
                <div className='createLit__buttons'>
                    <button type='button' onClick={onClosePopup}>Cancel</button>
                    <button type='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditItem;