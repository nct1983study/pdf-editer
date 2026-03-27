import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Free Plan */}
          <div className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">Free</h3>
            <p className="mb-6 text-gray-500">Perfect for occasional use.</p>
            <div className="mb-6 flex items-baseline text-5xl font-extrabold text-gray-900">
              $0
              <span className="ml-1 text-xl font-medium text-gray-500">/mo</span>
            </div>
            <Button variant="outline" className="mb-8 w-full rounded-full h-12">
              Get Started
            </Button>
            <ul className="flex flex-1 flex-col gap-4 text-gray-600">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Max file size: 15 MB
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Tasks per day: 2
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Storage: 1 GB
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Standard processing priority
              </li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="relative flex flex-col rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-bold text-white uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900">Pro</h3>
            <p className="mb-6 text-gray-500">For heavy users and professionals.</p>
            <div className="mb-6 flex items-baseline text-5xl font-extrabold text-gray-900">
              $9
              <span className="ml-1 text-xl font-medium text-gray-500">/mo</span>
            </div>
            <Button className="mb-8 w-full rounded-full h-12 bg-blue-600 hover:bg-blue-700">
              Upgrade to Pro
            </Button>
            <ul className="flex flex-1 flex-col gap-4 text-gray-600">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Max file size: 500 MB
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Unlimited tasks per day
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Storage: 100 GB
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                High server priority
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Advanced tools (OCR, E-Sign)
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Ad-free experience
              </li>
            </ul>
          </div>

          {/* Business Plan */}
          <div className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:col-span-1 md:col-span-2 lg:col-start-3">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">Business</h3>
            <p className="mb-6 text-gray-500">For teams and organizations.</p>
            <div className="mb-6 flex items-baseline text-5xl font-extrabold text-gray-900">
              $25
              <span className="ml-1 text-xl font-medium text-gray-500">/user</span>
            </div>
            <Button variant="outline" className="mb-8 w-full rounded-full h-12">
              Contact Sales
            </Button>
            <ul className="flex flex-1 flex-col gap-4 text-gray-600">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Everything in Pro
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Team management dashboard
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Shared workspaces
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                SSO & Audit Logs
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                API Access
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
