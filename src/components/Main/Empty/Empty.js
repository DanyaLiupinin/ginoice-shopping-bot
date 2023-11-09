import "./Empty.css";

import basketImage from "../../../images/basket.svg";

const Empty = () => {
    return (
        <div className="list-empty">
            <img className="list-empty__image" src={basketImage} alt="basket" />
            <p className="list-empty__caption">
                You have not added any shopping lists. Tap the button below to create one
                now
            </p>
        </div>
    );
};

export default Empty;