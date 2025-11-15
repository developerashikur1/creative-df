"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutPage() {
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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <Badge variant="outline" className="mb-6 border-purple-500/50 text-purple-300">
            About Us
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-white">Building the future of</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              personal AI
            </span>
          </h1>
          <p className="text-xl text-white/60 text-pretty leading-relaxed">
            We're on a mission to make AI accessible, helpful, and respectful of your privacy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To create an AI assistant that truly understands and respects you, making technology work for you instead of the other way around.",
            },
            {
              icon: Heart,
              title: "Our Values",
              description:
                "Privacy-first, user-centric design, and transparent AI that puts you in control of your digital life.",
            },
            {
              icon: Users,
              title: "Our Team",
              description:
                "A diverse group of engineers, designers, and AI researchers passionate about building ethical technology.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Join us on this journey</h2>
          <p className="text-white/60 mb-8 leading-relaxed max-w-2xl mx-auto">
            We're always looking for talented individuals who share our vision of ethical, user-centric AI.
          </p>
          <Link href="/careers">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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
