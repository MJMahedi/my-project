import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useStateValue } from '../../StateProvider';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = ({ basket, setShowModal }) => {
    const { user } = useStateValue();
    const [customerEmail, setCustomerEmail] = useState(user?.email || 'Unregistered User');
    const [customerPhone, setCustomerPhone] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');


    // const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const handleOrderConfirmation = () => {
        const orderDetails = basket.map(item => {
            return `
                Product: ${item.title}\n
                Quantity: ${item.quantity}\n
                Price: ${item.price} Taka\n
                Discount: ${item.discount}%\n
                Total: ${(item.quantity * item.price) - (item.discount * item.quantity)} Taka\n
            `;
        }).join('\n');

        const message = `
            New Order Confirmation:

            Customer Email: ${customerEmail}
            Customer Phone: ${customerPhone || 'Not Provided'}
            Order Details:
            ${orderDetails}
        `;

        emailjs.send(
            'service_7pzzg5i',
            'template_g7y0gwl',
            {
                customerEmail,
                customerPhone,
                message,
            },
            'uNVDwlTKVdUoxUjaQ'
        ).then((response) => {
            console.log('Order confirmation sent', response);
            setConfirmationMessage('Order confirmed! We will contact you soon.');
            alert('Order confirmed! We will contact you soon.');
            setShowModal(false); // Close the modal
            dispatch({
                type: 'CLEAR_BASKET', // This will reset the basket in the global state
            });
            navigate('/'); // You can change '/' to the appropriate route if needed
        }).catch((error) => {
            console.error('Error sending email', error);
            setConfirmationMessage('Failed to send confirmation email. Please try again.');

        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Confirm Your Order</h2>

                <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBg"
                />

                <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                    className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBg"
                />

                <div className="flex justify-end gap-4">
                    <button
                        onClick={() => setShowModal(false)}
                        className="bg-rose-900 text-white px-4 py-2 rounded-md hover:bg-customBg-900 transition-all"
                    >
                        Cancel !!
                    </button>
                    <button
                        onClick={handleOrderConfirmation}
                        className="bg-[#e49b0f] text-white px-4 py-2 rounded-md hover:bg-customBg-900 transition-all"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
