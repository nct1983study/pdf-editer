import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { 
  ArrowLeft, 
  Download, 
  Type, 
  PenTool, 
  Image as ImageIcon, 
  PenLine,
  Undo,
  Redo,
  Save
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Editor() {
  const { id } = useParams()
  const [activeTool, setActiveTool] = useState("text")

  const tools = [
    { id: "text", icon: Type, label: "Text" },
    { id: "draw", icon: PenTool, label: "Draw" },
    { id: "image", icon: ImageIcon, label: "Image" },
    { id: "sign", icon: PenLine, label: "Sign" },
  ]

  return (
    <div className="flex h-screen flex-col bg-gray-100">
      {/* Editor Header */}
      <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900">Document_{id}.pdf</span>
            <span className="flex items-center gap-1 text-xs text-green-600">
              <Save className="h-3 w-3" /> Saved to Cloud
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Redo className="h-4 w-4" />
          </Button>
          <div className="mx-2 h-6 w-px bg-gray-200" />
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </header>

      {/* Editor Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Thumbnails */}
        <aside className="w-48 overflow-y-auto border-r border-gray-200 bg-white p-4">
          <div className="space-y-4">
            {[1, 2, 3].map((page) => (
              <div key={page} className="group relative cursor-pointer">
                <div className={`aspect-[1/1.4] w-full rounded border-2 bg-gray-50 ${page === 1 ? 'border-blue-500' : 'border-gray-200 group-hover:border-blue-300'}`}>
                  <div className="flex h-full items-center justify-center text-gray-400">
                    Page {page}
                  </div>
                </div>
                <div className="mt-1 text-center text-xs text-gray-500">{page}</div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Canvas Area */}
        <main className="relative flex-1 overflow-auto bg-gray-100 p-8">
          {/* Floating Toolbar */}
          <div className="absolute left-1/2 top-4 flex -translate-x-1/2 items-center gap-1 rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
            {tools.map((tool) => (
              <Button
                key={tool.id}
                variant={activeTool === tool.id ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setActiveTool(tool.id)}
                className={activeTool === tool.id ? "bg-gray-100" : ""}
                title={tool.label}
              >
                <tool.icon className="h-4 w-4" />
              </Button>
            ))}
          </div>

          {/* Canvas Placeholder */}
          <div className="mx-auto mt-12 aspect-[1/1.4] w-full max-w-3xl bg-white shadow-lg">
            <div className="flex h-full items-center justify-center border-2 border-dashed border-gray-200 text-gray-400">
              PDF Canvas Rendering Area
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
