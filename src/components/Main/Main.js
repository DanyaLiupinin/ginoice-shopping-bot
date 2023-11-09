import './Main.css';

import CreateList from '../CreateList/CreateList';
import basketImage from '../../images/basket.svg';
import { useState } from 'react';

const Main = () => {

    const [isCreateListActive, setCreateListActive] = useState(false);

    const onCloseListCreation = () => {
        setCreateListActive(false)
    }

    return (
<>
        
        {isCreateListActive && 
        <CreateList
            onClose={onCloseListCreation}
        />
        }
        <section className='main'>
            <h1 className='main__title'>Shopping list</h1>
            <img className='main__image' src={basketImage} alt='basket' />
            <p className='main__caption'>
                You have not added any shopping lists
                Tap the button below to create one now
            </p>
            <button onClick={() => setCreateListActive(true)} className='main__create-btn'>
                create
            </button>
        </section>
    </>
    )
}

export default Main;