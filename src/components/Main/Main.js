import './Main.css';

import CreateList from '../CreateList/CreateList';
import basketImage from '../../images/basket.svg';
import Lists from './Lists/Lists';
import { useState } from 'react';

const Main = ({ lists }) => {

    const [isCreateListActive, setCreateListActive] = useState(false);

    const onCloseListCreation = () => {
        setCreateListActive(false)
    }
    console.log(lists)

    return (
        <>



            <section className='main'>
                <CreateList
                    isActive={isCreateListActive}
                    onClose={onCloseListCreation}
                />
                <h1 className='main__title'>Shopping list</h1>

                {lists && lists.length > 0 ?
                    <div className='main__lists'>
                        <Lists lists={lists} />
                    </div> :
                    <div className='main__empty-list'>
                        <img className='main__image' src={basketImage} alt='basket' />
                        <p className='main__caption'>
                            You have not added any shopping lists
                            Tap the button below to create one now
                        </p>
                    </div>
                }

                <button onClick={() => setCreateListActive(true)} className='main__create-btn'>
                    create
                </button>


            </section>
        </>
    )
}

export default Main;