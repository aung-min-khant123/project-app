import React from 'react'

function Footer() {
  return (
  <>
    <footer className="bg-[#D9D9D9] py-12">
  <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Column 1: Logo */}
    <div className="flex justify-start items-start">
      <img 
        src="/images/footerLogo.png" 
        alt="Little Lemon Logo" 
        className="w-24 object-contain"
      />
    </div>

    {/* Column 2: Doormat Navigation */}
    <div>
      <h2 className="text-[#495E57] font-bold text-xl mb-4">Doormat Navigation</h2>
      <ul className="space-y-2 text-gray-800 font-medium">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/menu" className="hover:underline">Cart</a></li>
        <li><a href="/reservations" className="hover:underline">Reservations</a></li>
        <li><a href="/order" className="hover:underline">Order Online</a></li>
        <li><a href="/login" className="hover:underline">Login</a></li>
      </ul>
    </div>

    {/* Column 3: Contact */}
    <div>
      <h2 className="text-[#495E57] font-bold text-xl mb-4">Contact</h2>
      <ul className="space-y-2 text-gray-800 font-medium">
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
      </ul>
    </div>

    {/* Column 4: Social Media */}
    <div>
      <h2 className="text-[#495E57] font-bold text-xl mb-4">Social Media Links</h2>
      <ul className="space-y-2 text-gray-800 font-medium">
        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">Linkdin</a></li>
        <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
      </ul>
    </div>

  </div>
</footer>
  </>
  )
}

export default Footer