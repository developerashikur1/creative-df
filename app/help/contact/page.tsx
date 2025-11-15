"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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
        <Link
          href="/help"
          className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Help
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-6 border-purple-500/50 text-purple-300"
          >
            Contact Support
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get in touch
          </h1>
          <p className="text-white/60 mb-8 leading-relaxed">
            Our support team typically responds within 24 hours. For urgent
            issues, please include "URGENT" in your subject line.
          </p>

          <form className="space-y-6 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div>
              <label className="block text-white font-medium mb-2">Name</label>
              <Input
                type="text"
                placeholder="Your name"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-2xl"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-2xl"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Subject
              </label>
              <Input
                type="text"
                placeholder="How can we help?"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-2xl"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Message
              </label>
              <Textarea
                placeholder="Describe your issue or question..."
                rows={6}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-2xl resize-none"
              />
            </div>
            <p className="text-sm text-white/50">
              Note: We aim to respond within 24 hours. Check our{" "}
              <Link
                href="/help/status"
                className="text-purple-400 hover:text-purple-300"
              >
                system status
              </Link>{" "}
              for any known issues.
            </p>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              Send Message
            </Button>
          </form>
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
            <p className="text-white/40 text-sm">
              © 2025 Noble Forge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
