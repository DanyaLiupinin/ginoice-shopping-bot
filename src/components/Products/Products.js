import { useParams } from 'react-router-dom';
import './Products.css';
import { useEffect, useState } from 'react';
import CreateItem from '../CreateItem/CreateItem';
import Product from './Product/Product';

const Products = ({ lists, onCloseItemCreation, isCreateItemActive, onOpenItemCreation, createProductHandler, deleteProductHandler, checkProductHandler }) => {

    const [list, setList] = useState();

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
                onCreate={onCreateProduct}
                type={'product'}
            />
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
                                                <Product key={index} name={product.name} status={product.status} id={index} onDeleteProduct={onDeleteProduct} 
                                                onCheckProduct={onCheckProduct}
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
        </div>
    )
}

export default Products;