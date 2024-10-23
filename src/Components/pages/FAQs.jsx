import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg from './../../assets/aboutPic.jpg'

function FAQs() {
  return (
    <>
      <style jsx>{`
                p {
                    color: #4a4a4a;
                    font-weight:normal;
                }
                 li {
                         color: #4a4a4a; 
                          margin-bottom: 0.5rem; 
                          font-weight:normal; 
                         padding-left: 1.2rem; 
                     }
            `}</style>
      <div className="bg-customBg bg-opacity-80 min-h-screen py-6 px-6 sm:px-12">
        <div className="bg-customBg bg-opacity-40 max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={AboutImg}
              alt="Our Team PNG"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl text-white font-semibold">FAQs</h1>
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQs) – <Link to="/" className="text-orange-500 hover:underline">
              Millennial Clothing
            </Link></h1>

            <h2 className="text-2xl font-bold mb-4">General Information</h2>

             <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">sWhat is <Link to="/" className="text-orange-500 hover:underline">
                Millennial Clothing?
              </Link></h3>
              <p>
                <Link to="/" className="text-orange-500 hover:underline">
                  Millennial Clothing
                </Link> is a premium fashion brand specializing in stylish apparel for teenagers, young professionals, and bikers.
                Our collection includes jackets, sweaters, shirts, pants, blazers, and accessories designed for every occasion.
              </p>
            </div> 
            


            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">2. What types of products do you offer?</h3>
              <p>We provide a wide range of high-quality clothing, including:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Jackets: Casual, denim, leather, and bomber jackets.</li>
                <li>Sweaters: Pullover sweaters, cardigans, and hooded sweaters.</li>
                <li>Outerwear: Windbreakers, raincoats, and traditional Panjabis.</li>
                <li>Shirts: Casual, formal, button-down, polo shirts, and various styles of t-shirts.</li>
                <li>Pants: Jeans, twill pants, cargo pants, formal pants, and casual shorts.</li>
                <li>Blazers: Casual and formal blazers, suit sets, and complete suit packages.</li>
                <li>Underwear: Boxers and sleeveless tops.</li>
                <li>Accessories: Caps, hats, scarves, belts, socks, and bags.</li>
                <li>Footwear: Casual shoes, sneakers, and sandals.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">3. Do you have products for both men and women?</h3>
              <p>
                Yes, while our primary focus is on men's fashion, we also offer a stylish selection for women, ensuring that everyone
                can enjoy fashionable clothing.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Ordering and Payment</h2>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">4. How can I place an order at <Link to="/" className="text-orange-500 hover:underline">
                Millennial Clothing?
              </Link></h3>
              <p>
                Ordering is easy! Simply browse our extensive range of products, select your favorites, and add them to your cart.
                Proceed to checkout and choose from various secure payment methods for a seamless shopping experience.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">5. What payment methods are accepted?</h3>
              <p>
                We accept major credit and debit cards, along with secure online payment options such as bKash and Rocket.
                Cash-on-delivery is also available for select locations.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Shipping and Delivery</h2>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">6. Do you offer international shipping?</h3>
              <p>
                Currently, we ship throughout Bangladesh. International shipping will be available soon, so please check back for updates
                on our global delivery options.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">7. How much does shipping cost?</h3>
              <p>
                Shipping costs vary based on your location and order size. You'll see the exact shipping fee during the checkout process,
                depending on your delivery address.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">8. How can I track my order?</h3>
              <p>
                Once your order has shipped, you’ll receive a tracking number via email. Use this number to track your order on our
                website or the delivery service provider’s site.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Returns and Exchanges</h2>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">9. What is your return policy?</h3>
              <p>
                We want you to be completely satisfied with your purchase. If you’re not happy, you can return unused items within 3 days
                of receiving them, provided they are in their original packaging. For more details, please review our Return Policy.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">10. Can I change or cancel my order?</h3>
              <p>
                If you need to change or cancel your order, please contact us within 24 hours of placing it at
                <a href="mailto:info@millennial-clothing.com" className="text-blue-500 hover:underline"> info@millennial-clothing.com</a>.
                After that time, changes may not be possible as your order could already be processed.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Sizing and Care</h2>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">11. How do I choose the right size?</h3>
              <p>
                We have a detailed Size Guide available on each product page to help you select the right fit. If you’re unsure,
                feel free to contact our support team for assistance.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">12. What are the care instructions for my clothing?</h3>
              <p>
                Each product includes specific care instructions to ensure its longevity. We recommend following the washing and care
                labels closely. You can also refer to our Care Guide for tips on maintaining your <Link to="/" className="text-orange-500 hover:underline">
                  Millennial Clothing
                </Link> items.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Customer Support</h2>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">13. How can I contact customer service?</h3>
              <p>
                Our customer service team is ready to assist you! Reach us via email at
                <a href="mailto:info@millennial-clothing.com" className="text-blue-500 hover:underline"> info@millennial-clothing.com</a>
                or through our Contact Us page.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">14. Do you offer promotions or discounts?</h3>
              <p>
                Yes, we frequently run special promotions and discounts! Sign up for our newsletter and follow us on social media to
                stay updated on the latest deals and offers.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Privacy and Security</h2>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">15. Is my personal information safe when shopping at <Link to="/" className="text-orange-500 hover:underline">
                Millennial Clothing?
              </Link></h3>
              <p>
                Absolutely! We prioritize your privacy and security. All transactions are secured with advanced encryption, and we
                never share your personal information without your consent. For more details, visit our
                <Link to="/privacy-policy" className="text-blue-500 hover:underline"> Privacy Policy</Link>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default FAQs;
