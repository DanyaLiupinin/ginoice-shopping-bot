import './Product.css';

const Product = ({name}) => {
    return (
        <div className='product'>
            <button className='product__checkbox'></button>
            <p className='product__name'>{name}</p>
            <button type='button' className='product__delete-btn'></button>
        </div>
    )
}

export default Product;