import './Product.css';

const Product = ({ name, id, onDeleteProduct, onCheckProduct, status }) => {
    return (
        <div className='product'>
            <button
                onClick={() => { onCheckProduct(id) }}
                className={`product__checkbox ${status === 'checked' ? 'product__checkbox_checked' : ''} `}
                type='button'
            />

            <p className='product__name'>{name}</p>
            <button
                onClick={() => onDeleteProduct(id)}
                className='product__delete-btn'
                type='button'
            />
        </div>
    )
}

export default Product;