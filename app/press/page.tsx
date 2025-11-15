"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Newspaper, Download, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PressPage() {
  const pressReleases = [
    {
      date: "March 15, 2025",
      title: "Noble Forge Raises $50M Series B to Expand AI Assistant Platform",
      excerpt: "Funding will accelerate product development and international expansion...",
    },
    {
      date: "February 1, 2025",
      title: "Jarvis Reaches 1 Million Active Users Milestone",
      excerpt: "Privacy-first AI assistant sees rapid adoption across consumer and enterprise markets...",
    },
    {
      date: "January 10, 2025",
      title: "Noble Forge Launches Family Plan with Shared Intelligence Features",
      excerpt: "New plan enables families to coordinate schedules and share automations...",
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
          <Badge variant="outline" className="mb-6 border-cyan-500/50 text-cyan-300">
            Press & Media
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-white">Latest news from</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Noble Forge
            </span>
          </h1>
          <p className="text-xl text-white/60 text-pretty leading-relaxed">
            Press releases, media coverage, and company announcements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 mb-20">
          {pressReleases.map((release, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Newspaper className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white/50 text-sm mb-2">{release.date}</p>
                  <h3 className="text-xl font-bold text-white mb-3">{release.title}</h3>
                  <p className="text-white/60 mb-4 leading-relaxed">{release.excerpt}</p>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-white/5 p-0 h-auto">
                    Read more →
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Download className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Press Kit</h3>
            <p className="text-white/60 mb-4">Download logos, screenshots, and brand assets</p>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:border-purple-500 hover:text-purple-300"
            >
              Download Kit
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Mail className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Media Inquiries</h3>
            <p className="text-white/60 mb-4">Get in touch with our press team</p>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:border-purple-500 hover:text-purple-300"
            >
              Contact Press
            </Button>
          </motion.div>
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
