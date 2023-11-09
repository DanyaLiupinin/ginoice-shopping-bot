import { useParams } from 'react-router-dom';
import './Products.css';
import { useEffect, useState } from 'react';

const Products = ({ lists }) => {

    const [list, setList] = useState();

    const id = useParams()

    useEffect(() => {

        if (lists && id && lists[id.id]) {
            setList(lists[id.id])
        }

    }, [id])

    return (
        <div className='products' >
            {
                list ?
                    <>
                        <h2 className='products__title'>{list.name}</h2>
                        <div className='products__container'>
                            {/*
                            lists.products && list.products.length > 0 ?
                            <>
                            <div className='product'>

                            </div> 
                            </>:
                            <p className='products__empty'>there are no product in this list</p>
            */}
                            <div className='product'>
                                <button className='product__checkbox'></button>
                                <p className='product__name'>banana</p>
                                <button type='button' className='product__delete-btn'></button>
                            </div>
                            
                        </div>
                    </>
                    :
                    <div>This list doesnt exist</div>
            }
        </div>
    )
}

export default Products;