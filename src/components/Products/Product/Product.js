import './Product.css';

const Product = ({name, id, onDeleteProduct}) => {
    return (
        <div className='product'>
            <button className='product__checkbox'></button>
            <p className='product__name'>{name}</p>
            <button onClick={() => onDeleteProduct(id)} type='button' className='product__delete-btn'></button>
        </div>
    )
}

export default Product;