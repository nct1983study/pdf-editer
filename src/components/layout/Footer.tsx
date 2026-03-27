import { Link } from "react-router-dom"
import { FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <FileText className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">DocuFlow</span>
            </Link>
            <p className="text-sm text-gray-500 mb-6 max-w-xs">
              Do More with Your PDFs—Instantly and Securely. Merge, edit, compress, and convert your documents in seconds.
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Tools</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/merge-pdf" className="hover:text-blue-600">Merge PDF</Link></li>
              <li><Link to="/split-pdf" className="hover:text-blue-600">Split PDF</Link></li>
              <li><Link to="/compress-pdf" className="hover:text-blue-600">Compress PDF</Link></li>
              <li><Link to="/pdf-to-word" className="hover:text-blue-600">PDF to Word</Link></li>
              <li><Link to="/translate-pdf" className="hover:text-blue-600">Translate PDF</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Company</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DocuFlow. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
