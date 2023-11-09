import './CreateList.css';

const CreateList = ({onClose}) => {

    return (
        <div className='createList'>
            
            <form className='createList__form'>
            <h2 className='createList__title' >your list name</h2>
                <input min={1} max={25} ></input>
                <div className='createLit__buttons'>
                    <button onClick={onClose} >Cancel</button>
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateList;