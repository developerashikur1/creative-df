"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Key, Bell, FileCheck, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Key,
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security with 2FA on all your devices",
    },
    {
      icon: Lock,
      title: "Device/Session Management",
      description: "View and manage all active sessions across your devices",
    },
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All your data is encrypted in transit and at rest",
    },
    {
      icon: FileCheck,
      title: "Encrypted Notes",
      description: "Store sensitive information with military-grade encryption",
    },
    {
      icon: Bell,
      title: "Breach Notifications",
      description: "Instant alerts if we detect any suspicious activity",
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
            Security
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-white">Enterprise-grade</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              security for everyone
            </span>
          </h1>
          <p className="text-xl text-white/60 text-pretty leading-relaxed">
            Your security is our top priority. We use industry-leading practices to keep your data safe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10"
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Security Best Practices</h2>
              <div className="space-y-3 text-white/70 leading-relaxed">
                <p>
                  <strong className="text-white">Enable 2FA:</strong> Add two-factor authentication to all your accounts
                </p>
                <p>
                  <strong className="text-white">Review Sessions:</strong> Regularly check active sessions and revoke
                  unknown devices
                </p>
                <p>
                  <strong className="text-white">Strong Passwords:</strong> Use unique, complex passwords for each
                  account
                </p>
                <p>
                  <strong className="text-white">Stay Updated:</strong> Keep your apps updated to get the latest
                  security patches
                </p>
              </div>
            </div>
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
