"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, Cookie, FileCheck } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function LegalPage() {
  const legalDocs = [
    {
      icon: FileText,
      title: "Terms of Service",
      description: "Our terms and conditions for using Jarvis",
      link: "/legal/terms",
    },
    {
      icon: Shield,
      title: "Privacy Policy",
      description: "How we collect, use, and protect your data",
      link: "/legal/privacy",
    },
    {
      icon: FileCheck,
      title: "Data Processing Agreement",
      description: "DPA for enterprise customers",
      link: "/legal/dpa",
    },
    {
      icon: Cookie,
      title: "Cookie Policy",
      description: "How we use cookies and tracking technologies",
      link: "/legal/cookies",
    },
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
          <Link href="/login">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Get Jarvis
            </Button>
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="outline" className="mb-6 border-purple-500/50 text-purple-300">
            Legal
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-white">Legal documents</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              & policies
            </span>
          </h1>
          <p className="text-xl text-white/60 text-pretty leading-relaxed">
            Review our terms, privacy policy, and other legal documents.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {legalDocs.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={doc.link}>
                <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6">
                    <doc.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{doc.title}</h3>
                  <p className="text-white/60 leading-relaxed">{doc.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
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
