import { useState } from "react";

import './ItemPopup.css';

const ItemPopup = ({onClose, isActive, onSubmit, text, submitAction, type, prevValue}) => {
//type: create | edit

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    // добаавить валидацию и вывод ошибки
    const onCreateList = (e) => {
        e.preventDefault();
        if (!value == '') {
            setError(false)
            onSubmit(value);
            setValue('');
            onClose();
        } else {
            setError(true)
        }
    }

    const onClosePopup = () => {
        onClose();
        setValue('');
    }

    return (
        <div className={`itemPopup ${isActive ? 'itemPopup_active' : ''}`}>
            <form className='itemPopup__form' onSubmit={onCreateList}>

            <h2 className='itemPopup__title'>{type === 'create' ? `your ${text} name` : `new name for ${prevValue}`}</h2>

                <input minLength={1} maxLength={25} value={value} onChange={(e) => setValue(e.target.value)}></input>
                {error ? <p className="itemPopup__error"
                >enter from 1 to 50 characters</p> : ''}
                <div className='itemPopup__buttons'>
                    <button type='button' onClick={onClosePopup}>Cancel</button>
                    <button type='submit'>{submitAction}</button>
                </div>
            </form>
        </div>
    )
}

export default ItemPopup;