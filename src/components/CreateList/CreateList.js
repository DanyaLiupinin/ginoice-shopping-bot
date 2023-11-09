import './CreateList.css';

const CreateList = ({onClose, isActive}) => {

    return (
        <div className={`createList ${isActive ? 'createList_active' : ''}`}>
            
            <form className='createList__form'>
            <h2 className='createList__title' >your list name</h2>
                <input min={1} max={25} ></input>
                <div className='createLit__buttons'>
                    <button type='button' onClick={onClose} >Cancel</button>
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateList;