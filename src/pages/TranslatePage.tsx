import { useState } from "react"
import { ToolPage } from "./ToolPage"
import { ArrowRightLeft } from "lucide-react"

export function TranslatePage() {
  const [sourceLang, setSourceLang] = useState("en")
  const [targetLang, setTargetLang] = useState("vi")

  const languages = [
    { code: "vi", name: "Vietnamese" },
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "zh", name: "Chinese" },
    { code: "es", name: "Spanish" },
  ]

  const swapLanguages = () => {
    setSourceLang(targetLang)
    setTargetLang(sourceLang)
  }

  const LanguageSelector = (
    <div className="flex items-center justify-center gap-4">
      <div className="flex flex-col items-start gap-1">
        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">From</label>
        <select 
          value={sourceLang} 
          onChange={(e) => setSourceLang(e.target.value)}
          className="h-10 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {languages.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
        </select>
      </div>
      
      <button 
        onClick={swapLanguages} 
        className="mt-5 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-blue-600"
        title="Swap languages"
      >
        <ArrowRightLeft className="h-5 w-5" />
      </button>

      <div className="flex flex-col items-start gap-1">
        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">To</label>
        <select 
          value={targetLang} 
          onChange={(e) => setTargetLang(e.target.value)}
          className="h-10 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {languages.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
        </select>
      </div>
    </div>
  )

  return (
    <ToolPage 
      title="Translate PDF" 
      description="Translate your PDF documents from popular languages to Vietnamese and vice versa instantly while preserving formatting." 
      actionText="Translate PDF"
    >
      {LanguageSelector}
    </ToolPage>
  )
}
