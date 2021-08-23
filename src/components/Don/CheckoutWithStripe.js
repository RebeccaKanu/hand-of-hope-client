import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {logo} from "../../assets/images/logo-hoh.png"

// sample function defined to compute total quantity of cart
function computeQuantity(cart) {
    return cart.reduce((count, itemInCart) => count + itemInCart.quantity, 0);
}
// similar functions can be defined to compute total price, email of the user, etc.

class CheckoutWithStripe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            token: "pk_test_51JMEM9GiKJlGwlMthvJcFviFNcw5RjwFPBW2QyqHB2YykU3S5hdtH8oDJ0c4sZnnITRl25QI2JtzhLKi8uNKG0t500n1MG4ewm"
         };
      }
    onToken = (res) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(this.state.token),
        }).then(res => {
            res.json().then(data => {
                console.log(`Payment token generated, ${data.name}`)
            })
        })
    };

    render() {
        return (
            <StripeCheckout
                amount = '200.00'
                name="STRIPE_INTEGRATION"
                // functions defined above can be used to add more information while making the API call.
                // description={`Order of ${computeQuantity(cart)} items!`}
                image='LINKTOIMAGE'
                stripeKey="pk_test_51JMEM9GiKJlGwlMthvJcFviFNcw5RjwFPBW2QyqHB2YykU3S5hdtH8oDJ0c4sZnnITRl25QI2JtzhLKi8uNKG0t500n1MG4ewm"
                currency="EUR"
                email='USER_EMAIL'
                token={this.onToken}/>          
        );
    }
}

export default CheckoutWithStripe
