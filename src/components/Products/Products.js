import { useParams } from 'react-router-dom';
import './Products.css';
import { useEffect, useState } from 'react';
import CreateItem from '../CreateItem/CreateItem';

const Products = ({ lists, onCloseItemCreation, isCreateItemActive, onOpenItemCreation }) => {

    const [list, setList] = useState();

    const id = useParams()


    



    useEffect(() => {

        if (lists && id && lists[id.id]) {
            setList(lists[id.id])
        }

    }, [id])

    return (
        <div className='products' >
            <CreateItem
                    isActive={isCreateItemActive}
                    onClose={onCloseItemCreation}
                    //onCreate={createListHandler}
                    type={'product'}
                />
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

                            <button onClick={onOpenItemCreation} type='button' className='products__add-button'>
                                New product
                            </button>
                            
                        </div>
                    </>
                    :
                    <div>This list doesnt exist</div>
            }
        </div>
    )
}

export default Products;