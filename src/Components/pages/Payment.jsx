import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useStateValue } from '../../StateProvider'
import { getTotal, getItemPriceTotal, getItemDiscountTotal, getBasketDiscountTotal, getBasketPriceTotal, getItemTotal } from '../../reducer';



function Payment() {

  const [{ basket }, dispatch] = useStateValue();

  const shipingCost = 60;
  const navigate = useNavigate();

  // Prepare WhatsApp Message with Basket Details
  const prepareWhatsAppMessage = () => {
    const orderItems = basket.map(item => (
      `${item.title} (x${item.quantity}) - ${getItemPriceTotal(basket, item.id)} Tk\n`
    )).join("");

    const totalPrice = getTotal(basket);
    const message = `
      Order Confirmation:\n
      Items:\n${orderItems}\n
      SubTotal: ${totalPrice} Tk\n
      Shipping Cost: ${shipingCost} Tk\n
      Total: ${totalPrice + shipingCost} Tk
    `;
    return encodeURIComponent(message.trim());
  };

   // WhatsApp URL
   const whatsappURL = `https://wa.me/8801847552985?text=${prepareWhatsAppMessage()}`;

  // Handle order confirmation and WhatsApp redirect
  const handleOrderConfirmation = () => {
    dispatch({ type: "EMPTY_BASKET" });  // Clear the basket
    window.location.href = whatsappURL;  // Redirect to WhatsApp
  };


  return (
    <div>
      <section className="bg-sky-50 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl text-center">Complete Order</h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-6">
                {basket.map(item =>
                  <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-4">
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="shrink-0 md:order-1">
                        <img className="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt={item.title} />
                      </a>
                      <div className="flex items-center justify-between md:order-3 md:justify-end overflow-hidden">
                        <div className="flex items-center">
                          <button onClick={() => dispatch({ type: 'decrement', id: item.id })} type="button" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none">
                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 2">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                            </svg>
                          </button>
                          <input type="text" className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 dark:text-white" value={item.quantity} readOnly />
                          <button onClick={() => dispatch({ type: 'increment', id: item.id })} type="button" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none">
                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                            </svg>
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-sm text-gray-600 dark:text-white">Price:  {getItemPriceTotal(basket, item.id)} Tk</p>
                          <p className="text-sm text-orange-500">Discount: {getItemDiscountTotal(basket, item.id)} Tk</p>
                          <p className="text-sm font-bold text-gray-900">SubTotal: {getItemTotal(basket, item.id)} Tk</p>
                        </div>
                      </div>
                    </div>

                    <div className='text-center border-t-[1px] pt-1'>
                      <h1 className='text-sm font-semibold'>{item.title}</h1>
                      <h1 className='text-[12px]'>Description: Lorem ipsum dolor sit amet...</h1>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary <span className='text-red-600'>{basket?.length}</span> items</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal text-gray-500">Original price: </dt>
                      <dd className="text-sm font-medium text-gray-900">{getBasketPriceTotal(basket)} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal text-orange-600">Total Discount: </dt>
                      <dd className="text-sm font-medium text-orange-500">{getBasketDiscountTotal(basket)} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                      <dt className="text-[14px] font-semibold text-gray-500">SubTotal</dt>
                      <dd className="text-sm font-semibold text-gray-900">{getTotal(basket)} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal text-gray-500">Shipping Cost: </dt>
                      <dd className="text-sm font-medium text-gray-900">{shipingCost} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal text-gray-500">Tax:</dt>
                      <dd className="text-sm font-medium text-orange-500">Free</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                      <dt className="text-base font-bold text-gray-900">Total</dt>
                      <dd className="text-base font-bold text-gray-900">{getTotal(basket) + shipingCost} Taka</dd>
                    </dl>
                  </div>
                </div>

                {/* Redirect to WhatsApp */}
                <button onClick={handleOrderConfirmation} className="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-md text-sky-50 bg-gradient-to-tr from-pink-600 to-sky-900">
                  Confirm via WhatsApp
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payment;
