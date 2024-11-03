import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import { getTotal, getBasketDiscountTotal, getBasketPriceTotal, getItemTotal, getItemPriceTotal, getItemDiscountTotal } from '../../reducer';

function Shoping_cart() {

  const shipingCost = 60;
  
  const [{ basket }, dispatch] = useStateValue(); // Get the basket from context


  return (
    <div>

      <section className="bg-sky-50 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">


                <div className="space-y-6">


                  {basket.map(item =>
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" className="shrink-0 md:order-1">
                          {/* <img className="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" /> */}
                          {/* <img className="h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" /> */}
                          <img className="h-20 w-20 dark:block" src={item.image} alt={item.title} />


                        </a>
                        <div className="flex items-center justify-around md:order-3 md:justify-end">

                          <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900 dark:text-white">Price : {getItemPriceTotal(basket, item.id)}Tk</p>
                            <p className="text-sm font-semibold text-orange-500 dark:text-white">Discount : {getItemDiscountTotal(basket, item.id)}Tk</p>
                          </div>
                        </div>

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white font-semibold">{item.title}</a>

                          <div className="flex items-center justify-around font-semibold">
                            <lebel className="font-semibold">Quantity add :</lebel>
                            <div className="flex items-center">
                              <button onClick={() => dispatch({ type: 'decrement', id: item.id })} type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                </svg>
                              </button>
                              <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={item.quantity} required />
                              <button onClick={() => dispatch({ type: 'increment', id: item.id })} type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                              </button>
                            </div>

                            <button  onClick={() => dispatch({ type: 'REMOVE_FROM_BASKET', item })} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                              <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>

            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary <span className='text-red-600'>{basket?.length}</span> items</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal text-gray-500 dark:text-gray-400">Original price : </dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">{getBasketPriceTotal(basket)} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal text-orange-500 dark:text-gray-400">Total Discount : </dt>
                      <dd className="text-sm font-medium text-orange-600">{getBasketDiscountTotal(basket)} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-[14px] font-semibold  text-gray-500 dark:text-white">SubTotal</dt>
                      <dd className="text-sm font-semibold text-gray-500 dark:text-white">{getTotal(basket)} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal text-gray-500 dark:text-gray-400">Shiping Cost : </dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">{shipingCost} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal text-gray-500 dark:text-gray-400">Tax :</dt>
                      <dd className="text-sm font-medium text-orange-500 dark:text-white">Free</dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>

                    <dd className="text-base font-bold text-gray-900 dark:text-white">{
                      getTotal(basket) === 0 ? getTotal(basket) : getTotal(basket) + shipingCost
                    } Taka</dd>
                  </dl>
                </div>

                <Link to={"/payment"} className="animate-bounce flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-md text-sky-50 hover:text-white font-medium bg-gradient-to-tr from-sky-500 to-sky-800 hover: focus:outline-none focus:ring-2 focus:ring-blue-600">Proceed to Checkout</Link>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>

                  <Link to={"/products"} className="inline-flex items-center gap-2 text-sm font-medium text-sky-800 underline hover:no-underline dark:text-primary-500">
                    Continue Shopping

                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </Link>

                </div>
              </div>


            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Shoping_cart
