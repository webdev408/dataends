export const Product = ({item, product, onAdd, onRemove }) => {
  
  return (
    <div className="card">
      <img className="small" src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <div>${product.price}</div>
      <div>
        {item ? <div>
          <button onClick={() => onRemove(item)} className="remove"> - </button>
          <span className="p-1">{item.qty}</span>
          <button onClick={() => onAdd(item)} className="add"> = </button>
        </div> :
        <button onClick={()=> onAdd(product)} className="add">Add To Cart</button> }
      </div>
    </div>
  )
};