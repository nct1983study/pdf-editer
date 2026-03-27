import React, { useState } from "react"
import { UploadCloud, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ToolPageProps {
  title: string
  description: string
  actionText: string
  children?: React.ReactNode
}

export function ToolPage({ title, description, actionText, children }: ToolPageProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0])
    }
  }

  return (
    <div className="flex flex-col">
      {/* Tool Header & Dropzone */}
      <section className="bg-gray-50 px-4 py-16 text-center md:px-6 lg:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
            {description}
          </p>

          {children && <div className="mb-8">{children}</div>}

          <div 
            className={`mx-auto max-w-2xl rounded-2xl border-2 border-dashed p-12 text-center transition-colors ${
              isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white hover:border-blue-400"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {file ? (
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{file.name}</h3>
                <p className="mb-6 text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                <Button size="lg" className="h-14 rounded-full px-8 text-lg shadow-lg bg-blue-600 hover:bg-blue-700">
                  {actionText}
                </Button>
                <button 
                  onClick={() => setFile(null)}
                  className="mt-4 text-sm text-gray-500 hover:text-gray-900 hover:underline"
                >
                  Remove file
                </button>
              </div>
            ) : (
              <>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <UploadCloud className="h-10 w-10" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Choose files</h3>
                <p className="mb-6 text-gray-500">or drop files here</p>
                <Button size="lg" className="h-14 rounded-full px-8 text-lg shadow-lg bg-blue-600 hover:bg-blue-700">
                  Select PDF File
                </Button>
              </>
            )}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Files are encrypted and deleted after 2 hours.
          </p>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="prose prose-blue mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to {title.toLowerCase()}</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600 mb-8">
              <li>Upload your PDF file using the drag and drop zone above.</li>
              <li>Wait for our cloud engine to process the file.</li>
              <li>Download your new file or save it to your dashboard.</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900">Is it safe to process my files here?</h3>
                <p className="mt-2 text-gray-600">Yes. All uploads use HTTPS/SSL and include end-to-end encryption. Your files are automatically deleted from our servers after 2 hours.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900">Do I need to install any software?</h3>
                <p className="mt-2 text-gray-600">No, DocuFlow is entirely cloud-based. You can process your documents directly in your web browser on any device.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
