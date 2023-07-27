import React from 'react'

export const Cart = ({ cartItems }) => {
    return (
        <div className="row my-4">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <th>{item.id}</th>
                                            <th><img src={item.image} width="60" height="60" /></th>
                                            <th>{item.title}</th>
                                            <th>{item.quantity}</th>
                                            <th>$ {item.price}</th>
                                            <th>$ {item.price * item.quantity}</th>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
