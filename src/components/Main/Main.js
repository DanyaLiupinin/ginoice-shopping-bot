import './Main.css';

import basketImage from '../../images/basket.svg';

const Main = () => {

    return (
        <section className='main'>
            <h1 className='main__title'>Shopping list</h1>
            <img className='main__image' src={basketImage} alt='basket' />
            <p className='main__caption'>
                You have not added any shopping lists
                Tap the button below to create one now
            </p>
            <button className='main__create-btn'>
                create
            </button>
        </section>
    )
}

export default Main;