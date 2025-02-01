import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[var(--secondary-color)] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Vinial</h3>
            <p className="text-gray-300">
              Premium wine subscription service delivering the finest selections to your doorstep.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/shop" className="text-gray-300 hover:text-white">Shop</Link></li>
              <li><Link href="/subscription" className="text-gray-300 hover:text-white">Subscriptions</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-white">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-300 hover:text-white">Returns</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@vinial.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Wine St, Porto, Portugal</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Vinial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 