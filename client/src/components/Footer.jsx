import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaAt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white w-full py-8 px-4 md:px-8 border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto">
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <div className="grid grid-cols-3 gap-x-4 gap-y-2">
              <div className="flex flex-col space-y-2">
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  About
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Careers
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Blog
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Press
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Lead
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Value
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Privacy
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Terms
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  FAQs
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Security
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Mobile
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Contact
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Partner
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Franchise
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Seller
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Warehouse
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Deliver
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Resources
                </Link>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Categories</h3>
              <Link href="#" className="text-green-600 hover:text-green-700 text-sm">
                see all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Vegetables & Fruits
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Dairy & Breakfast
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Munchies
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Cold Drinks & Juices
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Instant & Frozen Food
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Tea, Coffee & Health Drinks
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Bakery & Biscuits
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Sweet Tooth
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Atta, Rice & Dal
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Dry Fruits, Masala & Oil
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Sauces & Spreads
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Chicken, Meat & Fish
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Paan Corner
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Organic & Premium
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Baby Care
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Pharma & Wellness
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Cleaning Essentials
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Home & Office
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Ice Creams & Frozen Desserts
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Personal Care
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Pet Care
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Beauty & Cosmetics
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Magazines
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Fashion & Accessories
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Electronics & Electricals
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Stationery Needs
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Books
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Toys & Games
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Print Store
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                E-Gift Cards
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© clickit Commerce Private Limited, 2024-2025</p>
          </div>

          {/* App Download */}
          {/* <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 md:mb-0">
            <span className="text-sm font-medium">Download App</span>
            <div className="flex space-x-2">
              <Link href="#" className="block">
                <img src="/placeholder.svg?height=40&width=120" alt="App Store" className="h-10" />
              </Link>
              <Link href="#" className="block">
                <img src="/placeholder.svg?height=40&width=120" alt="Google Play" className="h-10" />
              </Link>
            </div>
          </div> */}

          {/* Social Media */}
          <div className="flex space-x-4">
            <Link href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
              <FaFacebookF size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
              <FaTwitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
              <FaInstagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
              <FaLinkedinIn size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
              <FaAt size={20} />
              <span className="sr-only">Other Social</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

