import './Lists.css';
import { useState } from 'react';

const Lists = ({lists, deleteListHandler}) => {

    return (
        
        <div className='lists'>
                        {
                            lists.map((list, index) => {
                                return (
                                    <div className='list' key={index}>
                                        <p className='title'>
                                            {list.name}
                                        </p>
                                        <button onClick={() => deleteListHandler(index)} className='list__delete-btn'></button>
                                    </div>
                                )
                            })
                        }
                    </div>
    )
}

export default Lists;