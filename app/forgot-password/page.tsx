"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, CircleDotIcon, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulated API call for password reset
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1200)
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground hover:bg-muted">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <Card className="p-8 rounded-3xl border border-border bg-card shadow-lg">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <CircleDotIcon className="size-5" />
              </div>
              <span className="text-2xl font-bold text-foreground">Noble Forge</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Forgot Password</h1>
            <p className="text-muted-foreground">
              Enter your email to receive a password reset link
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleForgotPassword} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-full h-12"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full"
              >
                {isLoading ? "Sending link..." : "Send Reset Link"}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4 py-10">
              <div className="p-3 bg-green-500/10 rounded-full">
                <CheckCircle className="text-green-500 w-8 h-8" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Check your inbox</h2>
              <p className="text-muted-foreground text-center text-sm">
                A password reset link has been sent to <br />
                <span className="font-medium text-foreground">{email}</span>
              </p>
              <Button
                onClick={() => router.push("/signin")}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full mt-4"
              >
                Back to Sign In
              </Button>
            </div>
          )}
        </Card>

        {/* Trust Badge */}
        <div className="mt-6 text-center">
          <Badge variant="outline" className="border-border text-muted-foreground bg-card">
            🔒 Your data is safe & encrypted
          </Badge>
        </div>
      </motion.div>
    </main>
  )
}
