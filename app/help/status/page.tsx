"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function StatusPage() {
  const services = [
    { name: "API Services", status: "operational" },
    { name: "Voice Recognition", status: "operational" },
    { name: "Integrations", status: "operational" },
    { name: "Mobile Apps", status: "operational" },
    { name: "Desktop Apps", status: "operational" },
    { name: "Smart Home Hub", status: "operational" },
  ];

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
          className="max-w-3xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-6 border-green-500/50 text-green-400"
          >
            All Systems Operational
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            System Status
          </h1>
          <p className="text-white/60 mb-12 leading-relaxed">
            Current status of all Jarvis services. Last updated:{" "}
            {new Date().toLocaleString()}
          </p>

          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  {service.status === "operational" ? (
                    <CheckCircle2 className="h-6 w-6 text-green-400" />
                  ) : (
                    <AlertCircle className="h-6 w-6 text-yellow-400" />
                  )}
                  <span className="text-white font-medium">{service.name}</span>
                </div>
                <Badge
                  variant="outline"
                  className={
                    service.status === "operational"
                      ? "border-green-500/50 text-green-400"
                      : "border-yellow-500/50 text-yellow-400"
                  }
                >
                  {service.status === "operational"
                    ? "Operational"
                    : "Degraded"}
                </Badge>
              </motion.div>
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
            <p className="text-white/40 text-sm">
              © 2025 Noble Forge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
