"use client"
import Image from "next/image"
import { ArrowLeft, Zap, Shield, Clock, Wrench, Leaf, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import AVR30 from "@//assets/AVR-30.jpg"
import GetQuoteButton from '@//components/getQuoteBtn';

export default function AVRDetailsPage() {
  const router = useRouter()

  const models = [
    { model: "AVR-5K", rating: "5kVA", phase: "Single", inputRange: "140V-260V", output: "220V/230V" },
    { model: "AVR-20K", rating: "20kVA", phase: "Three", inputRange: "300V-480V", output: "380V/400V" },
    { model: "AVR-100K", rating: "100kVA", phase: "Three", inputRange: "320V-500V", output: "415V ±1%" },
  ]

  const applications = [
    "Generators (Diesel/Gas) – Ensures smooth power output",
    "Industrial Machines (CNC, Motors, Pumps) – Prevents voltage-related failures",
    "Medical Equipment (MRI, X-ray, Labs) – Critical for precision devices",
    "Telecom Towers & Data Centers – Avoids server crashes",
    "Home/Office – Protects ACs, refrigerators, computers",
  ]

  const keyFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Wide Range of Ratings",
      desc: "Available from 1kVA to 3000kVA (single-phase & three-phase)",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Precision Control",
      desc: "Maintains stable output voltage (±1%) despite input fluctuations",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Surge & Spike Protection",
      desc: "Safeguards sensitive electronics from damage",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Response Time",
      desc: "Corrects voltage in milliseconds to prevent downtime",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Durable & Low Maintenance",
      desc: "Built for harsh environments (dust, moisture, temperature variations)",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Energy Efficient",
      desc: "Reduces power waste and extends equipment lifespan",
    },
  ]

  const whyChooseUs = [
    "Competitive Pricing – Best value for premium quality",
    "Warranty & Support – 1-3 years warranty + technical assistance",
    "Fast Delivery – Stock ready for popular models",
    "Certified & Tested – ISO, CE, IEC compliance",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">AVR Solutions</h1>
              <p className="text-xl mb-8 text-blue-100">
                High-quality Automatic Voltage Regulators designed to stabilize voltage fluctuations and protect
                electrical equipment. Suitable for generators, industrial machinery, medical equipment, telecom systems,
                and home/office appliances.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">1kVA - 3000kVA Range</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">±1% Precision</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">Fast Response</span>
                </div>
              </div>
            </div>
            <div className="relative h-80 lg:h-96">
              <Image
                src={AVR30}
                alt="AVR Solutions"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600">Advanced technology for reliable voltage regulation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications</h2>
            <p className="text-lg text-gray-600">Versatile solutions for various industries</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((application, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Available Models */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Models</h2>
            <p className="text-lg text-gray-600">Sample range - Custom ratings available upon request</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Model</th>
                  <th className="px-6 py-4 text-left font-semibold">Rating</th>
                  <th className="px-6 py-4 text-left font-semibold">Phase</th>
                  <th className="px-6 py-4 text-left font-semibold">Input Range</th>
                  <th className="px-6 py-4 text-left font-semibold">Output</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-medium text-gray-900">{model.model}</td>
                    <td className="px-6 py-4 text-gray-700">{model.rating}</td>
                    <td className="px-6 py-4 text-gray-700">{model.phase}</td>
                    <td className="px-6 py-4 text-gray-700">{model.inputRange}</td>
                    <td className="px-6 py-4 text-gray-700">{model.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-blue-100">Your trusted partner for voltage regulation solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-blue-100 text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Stabilize Your Power?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a customized AVR solution that meets your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GetQuoteButton />
            <button className="border border-gray-300 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Technical Support
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
