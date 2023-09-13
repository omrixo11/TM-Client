import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sumCart, incrementQuantity, decrementQuantity, removeItem, clearCart } from '../features/cart/cartSlice';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const totalP = useSelector((state) => state.cart.total);
    const navigate = useNavigate();
    const [livraison, setLivraison] = useState(7);
    const [quantity, setQuantity] = useState(1);
    const user = useSelector((state) => state.auth.user);
    const userId = user ? user.user._id : null;
    const productIds = cart.cart.map((product) => product.id);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Espece');

    useEffect(() => {
        console.log("This is products iddddddd:", cart);
    })

    const placeOrder = async () => {
        try {
            if (!user) {
                navigate('/login');
                return;
            }
            const orderedProducts = cart.cart.map((product) => (
                {
                    product: product.id,
                    quantity: product.quantity,
                }
            ));
            console.log(orderedProducts, 'order products');

            const order = {
                user: userId,
                product: orderedProducts,
                prix: totalP + livraison,
                typePayment: selectedPaymentMethod,
                etat: 'En Attente',

            };
            var money = totalP + livraison + '' + '000'
            console.log(Number(money, 'tesstr'));

            if (selectedPaymentMethod === 'CartBancaire') {

                const getway = {
                    "receiverWalletId": "64ff797847bb62fc99b7e402",
                    "token": "TND",
                    "amount": Number(money),
                    "type": "immediate",
                    "description": "payment description",
                    "acceptedPaymentMethods": [
                        "wallet"
                    ],
                    "lifespan": 10,
                    "checkoutForm": true,
                    "addPaymentFeesToAmount": true,
                    "firstName": "Omri",
                    "lastName": "Mohamed Ali",
                    "phoneNumber": "92447177",
                    "email": "omrixo.dali97@gmail.com",
                    "orderId": "123475",
                    "webhook": "https://merchant.tech/api/notification_payment",
                    "silentWebhook": true,
                    "successUrl": "https://dev.konnect.network/gateway/payment-success",
                    "failUrl": "https://dev.konnect.network/gateway/payment-failure",
                    "theme": "light"
                }

                const paymentResponse = await axios.post('http://localhost:5001/order/init-payment', getway, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                console.log('Payment initialized successfully:', paymentResponse.data);


                const paymentId = paymentResponse.data.paymentRef;
                console.log(paymentId, 'idpay');
                const paymentDetails = await axios.get(`http://localhost:5001/order/payment-details/${paymentId}`);

                console.log('Payment details:', paymentDetails.data);
                console.log(paymentResponse.data.payUrl, 'test url ');
                if (paymentResponse) window.location.href = paymentResponse.data.payUrl

            }
            const response = await axios.post('http://localhost:5001/order', order, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Order placed successfully:', response.data);

            ///email
         


            toast.success('Votre commande a été passée avec succès.')
            dispatch(clearCart());
            navigate('/');

        } catch (error) {
            console.error('Error placing order:', error);
        }
    };


    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    useEffect(() => {
        console.log(selectedPaymentMethod, "type");
        console.log(productIds, "ids products");
        dispatch(sumCart());
        console.log(totalP, 'toto', quantity)

    }, [quantity]);

    return (
        <div>
            <section class="cart-section section-b-space">
                <div class="container-fluid-lg">
                    <div class="row g-sm-5 g-3">
                        <div class="col-xxl-9">
                            <div class="cart-table">
                                <div class="table-responsive-xl">
                                    <table class="table">
                                        <tbody>
                                            {
                                                cart ? cart.cart.map((product, i) => (

                                                    <tr class="product-box-contain" key={product._id}>
                                                        <td class="product-detail">
                                                            <div class="product border-0">
                                                                <a href="product-left-thumbnail.html" class="product-image">
                                                                    <img src={
                                                                        product.imageUrls
                                                                    }
                                                                        class="img-fluid blur-up lazyload" alt="" />
                                                                </a>
                                                                <div class="product-detail">
                                                                    <ul>
                                                                        <li class="name">
                                                                            <a href="product-left-thumbnail.html">{product.name}</a>
                                                                        </li>

                                                                        <li>


                                                                        </li>

                                                                        <li>
                                                                            <h5 class="saving theme-color">Prix promo : DT{Number(product.promoprice)}</h5>
                                                                            <h6>Prix : {Number(product.price).toFixed(3)}</h6>
                                                                        </li>

                                                                        <li class="quantity-price-box">
                                                                            <div class="caxrt_qty">
                                                                                <div class="input-group">
                                                                                    <button type="button" class="btn qty-left-minus"
                                                                                        data-type="minus" data-field="">
                                                                                        <i class="fa fa-minus ms-0"
                                                                                            aria-hidden="true"></i>
                                                                                    </button>
                                                                                    <input class="form-control input-number qty-input"
                                                                                        type="text" name="quantity" />{product.quantity}
                                                                                    <button type="button" class="btn qty-right-plus"
                                                                                        data-type="plus" data-field="">
                                                                                        <i class="fa fa-plus ms-0"
                                                                                            aria-hidden="true"></i>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <h5>Total: DT{product.promoprice}</h5>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="price">
                                                            <h4 class="table-title text-content">Promo</h4>
                                                            <h5 class="saving theme-color">Prix promo : DT{product.promoprice}</h5>
                                                            <h6>Prix : DT{product.price}</h6>
                                                        </td>
                                                        <td class="quantity">
                                                            <h4 class="table-title text-content">Qty</h4>
                                                            <div class="quantity-price">
                                                                <div class="cart_qty">
                                                                    <div class="input-group">
                                                                        <button type="button" class="btn qty-left-minus"
                                                                            data-type="minus" data-field="" onClick={() => {
                                                                                if (product && product.quantity > 0) {
                                                                                    dispatch(decrementQuantity(product.id));
                                                                                    setQuantity(quantity + 1);
                                                                                }
                                                                            }}>
                                                                            <i class="fa fa-minus ms-0" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input class="form-control input-number qty-input" type="text"
                                                                            name="quantity" value={product.quantity} />
                                                                        <button type="button" class="btn qty-right-plus"
                                                                            data-type="plus" data-field="" onClick={() => { dispatch(incrementQuantity(product.id)); setQuantity(quantity - 1) }}>
                                                                            <i class="fa fa-plus ms-0" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="subtotal">
                                                            <h4 class="table-title text-content">Totale</h4>
                                                            <h5>DT {product.quantity * product.promoprice}</h5>
                                                        </td>
                                                        <td class="save-remove">
                                                            <h4 class="table-title text-content">Action</h4>
                                                            <a class="remove close_button" href="javascript:void(0)" onClick={() => { dispatch(removeItem(product.id)); setQuantity(1) }}>Supprimer</a>
                                                        </td>{ }
                                                    </tr>

                                                )) : <>Loading Empty Cart ...</>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3">
                            <div class="summery-box p-sticky">
                                <div class="summery-header">
                                    <h3>Totale de la carte</h3>
                                </div>
                                <div class="summery-contain">
                                    <ul>
                                        <li>
                                            <h4>Totale achat</h4>{totalP ?
                                                <h4 class="price">DT {totalP}</h4> : <h4 class="price">DT</h4>}
                                        </li>
                                        <li class="align-items-start">
                                            <h4>Frais livraison</h4>
                                            <h4 class="price text-end">DT {livraison}</h4>
                                        </li>
                                    </ul>
                                    <div class="payment-method">
                                        <h3>Methode de payement:</h3>
                                        <ul>
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="Espece"
                                                        checked={selectedPaymentMethod === 'Espece'}
                                                        onChange={handlePaymentMethodChange}
                                                    />
                                                    Espece
                                                </label>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="CartBancaire"
                                                        checked={selectedPaymentMethod === 'CartBancaire'}
                                                        onChange={handlePaymentMethodChange}
                                                    />
                                                    Carte bancaire ou E-Dinar
                                                </label>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="Cheque"
                                                        checked={selectedPaymentMethod === 'Cheque'}
                                                        onChange={handlePaymentMethodChange}
                                                    />
                                                    Cheque
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <ul class="summery-total">
                                    <li class="list-total border-top-0">
                                        <h4>Total (DT)</h4>
                                        {totalP !== 0 ? <h4 class="price theme-color">DT {totalP + livraison}</h4>
                                            :
                                            <h4 class="price theme-color">DT 0</h4>}
                                    </li>
                                </ul>

                                <div class="button-group cart-button">
                                    <ul>
                                        <li>
                                            <button button onClick={placeOrder} className="btn btn-primary"
                                                class="btn btn-animation proceed-btn fw-bold">Payer</button>
                                        </li>

                                        <li>
                                            <button onclick="location.href = 'index.html';"
                                                class="btn btn-light shopping-button text-dark">
                                                <i class="fa-solid fa-arrow-left-long"></i>Retourner vers la boutique</button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Cart