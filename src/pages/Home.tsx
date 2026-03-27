import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { 
  UploadCloud, 
  FileText, 
  Scissors, 
  Minimize2, 
  FileEdit, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  Trash2,
  Languages
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Home() {
  const features = [
    { icon: FileText, title: "Merge PDF", desc: "Combine multiple PDFs into one unified document.", href: "/merge-pdf" },
    { icon: Scissors, title: "Split PDF", desc: "Extract pages or split a PDF into multiple files.", href: "/split-pdf" },
    { icon: Minimize2, title: "Compress PDF", desc: "Reduce file size without losing quality.", href: "/compress-pdf" },
    { icon: FileEdit, title: "PDF to Word", desc: "Convert PDFs to editable Word documents.", href: "/pdf-to-word" },
    { icon: Languages, title: "Translate PDF", desc: "Translate PDFs to Vietnamese and other languages.", href: "/translate-pdf" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-4 py-20 text-center md:px-6 lg:py-32">
        <div className="container mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            Do More with Your PDFs—<br className="hidden sm:block" />
            <span className="text-blue-600">Instantly and Securely.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 sm:text-xl"
          >
            Merge, edit, compress, and convert your documents in seconds. No software installation required.
          </motion.p>

          {/* Massive Dropzone */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/50 p-12 text-center transition-colors hover:border-blue-500 hover:bg-blue-50"
          >
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <UploadCloud className="h-10 w-10" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900">Choose files</h3>
            <p className="mb-6 text-gray-500">or drop files here</p>
            <Button size="lg" className="h-14 rounded-full px-8 text-lg shadow-lg">
              Upload File
            </Button>
            <p className="mt-4 text-sm text-gray-400">
              Max file size 15MB. <Link to="/pricing" className="text-blue-600 hover:underline">Go Pro for 500MB.</Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-y border-gray-100 bg-gray-50 py-10">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Trusted by millions of users worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-gray-600">
              <ShieldCheck className="h-6 w-6 text-green-500" />
              <span className="font-medium">256-bit SSL</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Zap className="h-6 w-6 text-yellow-500" />
              <span className="font-medium">Instant Processing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Trash2 className="h-6 w-6 text-red-500" />
              <span className="font-medium">Auto-Deleted in 2h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Everything you need to manage PDFs</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A complete suite of tools to make your document workflows faster and easier.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Link 
                key={i} 
                to={feature.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">How it works</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Process your documents in three simple steps.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">1</div>
              <h3 className="mb-3 text-xl font-bold">Upload</h3>
              <p className="text-gray-400">Drag & drop your file straight from your desktop or cloud storage.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">2</div>
              <h3 className="mb-3 text-xl font-bold">Process</h3>
              <p className="text-gray-400">Our cloud engine instantly applies your chosen edits or conversions.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">3</div>
              <h3 className="mb-3 text-xl font-bold">Download</h3>
              <p className="text-gray-400">Save to your device or export directly to Google Drive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Ready to simplify your workflow?</h2>
          <Button size="lg" className="h-14 rounded-full px-8 text-lg shadow-lg">
            Upload a Document Now
          </Button>
        </div>
      </section>
    </div>
  )
}
