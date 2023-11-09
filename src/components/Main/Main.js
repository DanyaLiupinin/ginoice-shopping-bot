import { useState } from "react";

import "./Main.css";

import CreateList from "../CreateList/CreateList";
import Lists from "./Lists/Lists";
import Empty from "./Empty/Empty";

const Main = ({ lists, createListHandler, deleteListHandler }) => {
    const [isCreateListActive, setCreateListActive] = useState(false);

    const onCloseListCreation = () => {
        setCreateListActive(false);
    };

    return (
        <>
            <section className="main">
                <CreateList
                    isActive={isCreateListActive}
                    onClose={onCloseListCreation}
                    onCreate={createListHandler}
                />

                <h1 className="main__title">My lists</h1>

                {lists && lists.length > 0 ? <Lists lists={lists} deleteListHandler={deleteListHandler} /> : <Empty />}

                <button
                    onClick={() => setCreateListActive(true)}
                    className="main__create-btn"
                >
                    create
                </button>
            </section>
        </>
    );
};

export default Main;
