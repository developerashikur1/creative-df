"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Apple, Smartphone, Monitor, QrCode, Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function DownloadPage() {
  const platforms = [
    {
      name: "iOS",
      icon: Apple,
      description: "iPhone & iPad",
      link: "#",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      name: "Android",
      icon: Smartphone,
      description: "Phones & Tablets",
      link: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "macOS",
      icon: Monitor,
      description: "Mac computers",
      link: "#",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      name: "Windows",
      icon: Monitor,
      description: "PC & Surface",
      link: "#",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const steps = [
    "Download the app for your device",
    "Sign in with your account",
    "Connect your first device or service",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Noble Forge
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-white/70 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/devices" className="text-white/70 hover:text-white transition-colors">
              Devices
            </Link>
            <Link href="/integrations" className="text-white/70 hover:text-white transition-colors">
              Integrations
            </Link>
            <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/help" className="text-white/70 hover:text-white transition-colors">
              Help
            </Link>
          </nav>
          <Link href="/login">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Get Jarvis
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="outline" className="mb-6 border-cyan-500/50 text-cyan-300">
            Get the Apps
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-white">Download Jarvis for</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              all your devices
            </span>
          </h1>
          <p className="text-xl text-white/60 text-pretty leading-relaxed">
            Get started in minutes. Available on iOS, Android, macOS, and Windows.
          </p>
        </motion.div>

        {/* Download Buttons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={platform.link}>
                <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-center h-full flex flex-col items-center justify-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-4`}
                  >
                    <platform.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                  <p className="text-white/60 mb-4">{platform.description}</p>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent group-hover:border-purple-500 group-hover:text-purple-300"
                  >
                    Download
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 text-center mb-20"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center">
            <QrCode className="h-24 w-24 text-slate-950" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Scan to download</h3>
          <p className="text-white/60">Use your phone's camera to scan and download the app instantly</p>
        </motion.div>

        {/* First 3 Steps Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get started in 3 steps</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white text-lg">{step}</p>
                </div>
                <Check className="h-6 w-6 text-purple-400 flex-shrink-0" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500" />
              <span className="font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Noble Forge
              </span>
            </div>
            <p className="text-white/40 text-sm">© 2025 Noble Forge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
