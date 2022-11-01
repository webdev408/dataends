export const Basket = ({ cartItems, onAdd, onRemove }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxAmount = itemsPrice * 0.13;
  const shippingCost = itemsPrice > 1000 ? 0 : 20;
  const totalBill = itemsPrice + taxAmount + shippingCost;
  
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty.</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-1">{item.name}</div>
            <div className="col-1">
              <button className="remove" onClick={() => onRemove(item)}> - </button>
              <button className="add" onClick={() => onAdd(item)}> + </button>
            </div>
            <div className="col-1 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Amount</div>
              <div className="col-1 text-right">${taxAmount.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Cost</div>
              <div className="col-1 text-right">${shippingCost.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2"><strong>Total Bill</strong></div>
              <div className="col-1 text-right"><strong>${totalBill.toFixed(2)}</strong></div>
            </div>
            <hr />
            <div className="row">
              <button onClick={()=>alert('ready to checkout?')}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </aside>
  )
};