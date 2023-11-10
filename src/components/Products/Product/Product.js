
import './Product.css';


const Product = ({ name, id, onDeleteProduct, onCheckProduct, status, onOpenItemEdition }) => {

    //добавить общий стиль для кнопки
    return (
        <div className='product'>
            <button
                onClick={() => { onCheckProduct(id) }}
                className={`product__checkbox ${status === 'checked' ? 'product__checkbox_checked' : ''} `}
                type='button'
            />

            <p className='product__name'>{name}</p>
            <button
                onClick={() => onOpenItemEdition(name, id)}
                className='product__edit-btn'
                type='button'
            />
            <button
                onClick={() => onDeleteProduct(id)}
                className='product__delete-btn'
                type='button'
            />
        </div>
    )
}

export default Product;