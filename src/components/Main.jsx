import { Product } from "./Product";

export const Main = ({cartItems, products, onAdd, onRemove}) => {
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">        
      {products.map((product) => (        
        <Product
          key={product.id}
          product={product}
          item={cartItems.find((x) => x.id === product.id)}
          onAdd={onAdd}
          onRemove={onRemove} />         
      ))}
      </div>
    </div>
  )
};  