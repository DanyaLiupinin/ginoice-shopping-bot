import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './Products.css';

import CreateItem from '../CreateItem/CreateItem';
import EditItem from '../EditItem/EditItem';
import Product from './Product/Product';

const Products = ({ lists, onCloseItemCreation, isCreateItemActive, onOpenItemCreation, createProductHandler, deleteProductHandler, checkProductHandler, editProductHandler }) => {

    
const navigate = useNavigate();
    const [list, setList] = useState();
    const [isEditItemActive, setEditItemActive] = useState(false);
    const [editItemVal, setEditItemVal] = useState(null);

    const id = useParams()

    const onCreateProduct = (productName) => {
        createProductHandler(id.id, productName)
    }

    const onDeleteProduct = (productId) => {
        deleteProductHandler(id.id, productId)
    }

    const onCheckProduct = (productId) => {
        checkProductHandler(id.id, productId)
    }

    const onEditProduct = (newValue) => {
        editProductHandler(id.id, editItemVal.id, newValue)
    }

    const onOpenItemEdition = (value, id) => {
        setEditItemActive(true)
        setEditItemVal({id, value})
    }

    const onCloseItemEdition = () => {
        setEditItemActive(false)
    }

    useEffect(() => {

        if (lists && id && lists[id.id]) {
            setList(lists[id.id])
        }

    }, [id])

    return (
        <section className='products'>
            <CreateItem
                isActive={isCreateItemActive}
                onClose={onCloseItemCreation}
                onCreate={onCreateProduct}
                type={'product'}
                action={'create'}
            />
            <EditItem 
                isActive={isEditItemActive}
                onClose={onCloseItemEdition}
                prevValue={editItemVal ? editItemVal.value : ''}
                onSubmit={onEditProduct}
            />

            <button className='products__goback-btn' type="button" onClick={() => navigate(-1)}>
            ←
            </button>
            {
                list ?
                    <>
                        <h2 className='products__title'>{list.name}</h2>
                        <div className='products__container'>
                            {
                                list.products && list.products.length > 0 ?
                                    <>
                                        {list.products.map((product, index) => {
                                            return (
                                                <Product 
                                                key={index} 
                                                name={product.name} 
                                                status={product.status} 
                                                id={index} 
                                                onDeleteProduct={onDeleteProduct} 
                                                onCheckProduct={onCheckProduct}
                                                onOpenItemEdition={onOpenItemEdition}
                                                />
                                            )
                                        })
                                        }
                                    </> :
                                    <p className='products__empty'>there are no product in this list</p>
                            }


                            <button onClick={onOpenItemCreation} type='button' className='products__add-button'>
                                New product
                            </button>

                        </div>
                    </>
                    :
                    <div className='list-doesnt-exist'>This list doesnt exist :c</div>
            }
        </section>
    )
}

export default Products;