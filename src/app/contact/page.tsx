import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-[80vh] bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-slate-900 p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 relative z-10">Contact Us</h1>
          <p className="text-gray-300 text-lg relative z-10 max-w-2xl mx-auto">
            We are always here to help. Reach out to EgyptFlower for premium equipment inquiries through any of the channels below.
          </p>
        </div>
        
        <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-20 h-20 bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-colors rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Phone className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Phone Number</h3>
            <a href="tel:+201001013966" className="text-gray-600 font-medium text-lg hover:text-blue-600 transition-colors">
              +20 100 101 3966
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-20 h-20 bg-green-50 group-hover:bg-green-500 text-green-600 group-hover:text-white transition-colors rounded-full flex items-center justify-center mb-6 shadow-sm">
              <MessageCircle className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">WhatsApp</h3>
            <a href="https://wa.me/201001013966" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-medium text-lg hover:text-green-600 transition-colors">
              +20 100 101 3966
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-20 h-20 bg-purple-50 group-hover:bg-purple-600 text-purple-600 group-hover:text-white transition-colors rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Mail className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Email Address</h3>
            <a href="mailto:gamal.aly85@gmail.com" className="text-gray-600 font-medium text-lg hover:text-purple-600 transition-colors break-all">
              gamal.aly85@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
