import "./Main.css";

import CreateItem from "../CreateItem/CreateItem";
import Lists from "./Lists/Lists";
import Empty from "./Empty/Empty";

const Main = ({ lists, createListHandler, deleteListHandler, onCloseItemCreation, isCreateItemActive, onOpenItemCreation }) => {
   
    return (
        <>
            <section className="main">
                <CreateItem
                    isActive={isCreateItemActive}
                    onClose={onCloseItemCreation}
                    onCreate={createListHandler}
                    type={'list'}
                    action={'create'}
                />

                <h1 className="main__title">My lists</h1>

                {lists && lists.length > 0 ? <Lists lists={lists} deleteListHandler={deleteListHandler} /> : <Empty />}

                <button
                    onClick={onOpenItemCreation}
                    className="main__create-btn"
                >
                    create
                </button>
            </section>
        </>
    );
};

export default Main;
