import './Lists.css';
import { Link } from "react-router-dom";

const Lists = ({lists, deleteListHandler}) => {

    return (
        
        <div className='lists'>
                        {
                            lists.map((list, index) => {
                                return (
                                    <div className='list' key={index}>
                                        <Link to={`/list/${index}`}>
                                        <p className='list__title'>
                                            {list.name}
                                        </p>
                                        </Link>
                                        <button onClick={() => deleteListHandler(index)} className='list__delete-btn'></button>
                                    </div>
                                )
                            })
                        }
                    </div>
    )
}

export default Lists;