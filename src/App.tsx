/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout"
import { DashboardLayout } from "./components/layout/DashboardLayout"
import { Home } from "./pages/Home"
import { Pricing } from "./pages/Pricing"
import { Dashboard } from "./pages/Dashboard"
import { ToolPage } from "./pages/ToolPage"
import { TranslatePage } from "./pages/TranslatePage"
import { Editor } from "./pages/Editor"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<div className="container mx-auto py-20 px-4 text-center"><h1 className="text-4xl font-bold">Features</h1><p className="mt-4 text-gray-600">Coming soon...</p></div>} />
          <Route path="/login" element={<div className="container mx-auto py-20 px-4 text-center"><h1 className="text-4xl font-bold">Log In</h1><p className="mt-4 text-gray-600">Authentication coming soon...</p></div>} />
          <Route path="/signup" element={<div className="container mx-auto py-20 px-4 text-center"><h1 className="text-4xl font-bold">Sign Up</h1><p className="mt-4 text-gray-600">Authentication coming soon...</p></div>} />
          <Route path="/merge-pdf" element={<ToolPage title="Merge PDF" description="Combine multiple PDFs into one unified document." actionText="Merge PDF" />} />
          <Route path="/split-pdf" element={<ToolPage title="Split PDF" description="Extract pages or split a PDF into multiple files." actionText="Split PDF" />} />
          <Route path="/compress-pdf" element={<ToolPage title="Compress PDF" description="Reduce file size without losing quality." actionText="Compress PDF" />} />
          <Route path="/pdf-to-word" element={<ToolPage title="PDF to Word" description="Convert PDFs to editable Word documents." actionText="Convert to Word" />} />
          <Route path="/translate-pdf" element={<TranslatePage />} />
        </Route>

        {/* Authenticated Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="starred" element={<div className="p-8 text-gray-500">Starred files will appear here.</div>} />
          <Route path="trash" element={<div className="p-8 text-gray-500">Deleted files will appear here.</div>} />
          <Route path="settings" element={<div className="p-8 text-gray-500">Account settings will appear here.</div>} />
        </Route>
        
        {/* Editor Route (No Layout) */}
        <Route path="/editor/:id" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  )
}
