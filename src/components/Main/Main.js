import "./Main.css";

import Lists from "./Lists/Lists";
import Empty from "./Empty/Empty";
import ItemPopup from "../ItemPopup/ItemPopup";

const Main = ({
    lists,
    createListHandler,
    deleteListHandler,
    onCloseItemCreation,
    isCreateItemActive,
    onOpenItemCreation
}) => {

    return (
        <>
            <section className="main">
                <ItemPopup
                    type={'create'}
                    submitAction={'create'}
                    isActive={isCreateItemActive}
                    onClose={onCloseItemCreation}
                    onSubmit={createListHandler}
                    text={'list'}
                />

                <h1 className="main__title">My lists</h1>

                {lists && lists.length > 0 ?
                    <Lists
                        lists={lists}
                        deleteListHandler={deleteListHandler}
                    /> :
                    <Empty />}

                <button
                    onClick={onOpenItemCreation}
                    className=" green-button "
                >
                    create
                </button>
            </section>
        </>
    );
};

export default Main;
