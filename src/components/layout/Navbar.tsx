import { Link } from "react-router-dom"
import { FileText, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <FileText className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">DocuFlow</span>
          </Link>
          <nav className="hidden md:ml-8 md:flex md:gap-6">
            <Link to="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900">Features</Link>
            <Link to="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</Link>
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                Tools
              </button>
              <div className="absolute left-0 top-full hidden w-48 rounded-md border border-gray-200 bg-white p-2 shadow-lg group-hover:block">
                <Link to="/merge-pdf" className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Merge PDF</Link>
                <Link to="/split-pdf" className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Split PDF</Link>
                <Link to="/compress-pdf" className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Compress PDF</Link>
                <Link to="/pdf-to-word" className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">PDF to Word</Link>
                <Link to="/translate-pdf" className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Translate PDF</Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">Log in</Link>
            <Button asChild>
              <Link to="/signup">Sign up free</Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}
