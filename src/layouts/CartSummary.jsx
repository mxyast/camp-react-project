import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown ,Label } from 'semantic-ui-react';
import { useSelector } from 'react-redux';


export default function CartSummary() {
    const {cartItems} = useSelector(state => state.cart)
    return (
        <div>
            <Dropdown item text='Language'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItems) => (
                            <Dropdown.Item key={cartItems.product.id}>
                                {cartItems.product.productName}
                                <Label>
                                    {cartItems.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }

                    <Dropdown.Item>Asus Laptop</Dropdown.Item>
                    <Dropdown.Item>Dell Laptop</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
