import { Link } from "react-router-dom"
import { 
  UploadCloud, 
  FileText, 
  MoreVertical, 
  Download, 
  Share2, 
  Trash2, 
  Edit 
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Dashboard() {
  const recentFiles = [
    { id: 1, name: "Q4_Financial_Report.pdf", date: "2 hours ago", size: "2.4 MB" },
    { id: 2, name: "Contract_Signed.pdf", date: "Yesterday", size: "1.1 MB" },
    { id: 3, name: "Presentation_Slides.pdf", date: "Oct 12, 2023", size: "5.7 MB" },
    { id: 4, name: "Invoice_00124.pdf", date: "Oct 10, 2023", size: "0.4 MB" },
  ]

  const quickTools = [
    { name: "Merge PDF", href: "/merge-pdf" },
    { name: "Split PDF", href: "/split-pdf" },
    { name: "Compress PDF", href: "/compress-pdf" },
    { name: "PDF to Word", href: "/pdf-to-word" },
    { name: "Translate PDF", href: "/translate-pdf" },
    { name: "Edit PDF", href: "/editor/new" },
  ]

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Quick Upload Zone */}
      <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-8 text-center transition-colors hover:border-blue-500 hover:bg-blue-50">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <UploadCloud className="h-6 w-6" />
        </div>
        <h3 className="mb-1 text-lg font-semibold text-gray-900">Upload a new file</h3>
        <p className="text-sm text-gray-500">Drag and drop your file here, or click to browse</p>
      </div>

      {/* Quick Tools */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Quick Tools</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {quickTools.map((tool) => (
            <Link
              key={tool.name}
              to={tool.href}
              className="flex min-w-[140px] flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white p-4 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              {tool.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Files */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recent Files</h2>
          <Button variant="outline" size="sm">View All</Button>
        </div>
        
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Date Modified</th>
                <th className="px-6 py-4 font-medium">Size</th>
                <th className="px-6 py-4 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentFiles.map((file) => (
                <tr key={file.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-red-500" />
                      <span className="font-medium text-gray-900">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{file.date}</td>
                  <td className="px-6 py-4">{file.size}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-blue-600">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-blue-600">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-blue-600">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
