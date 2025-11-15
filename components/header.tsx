"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, CircleDotIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import Link from "next/link"

// Button component (matching your existing design system)
const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors"
  const variantStyles = {
    ghost: "hover:bg-accent hover:text-accent-foreground",
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
  }
  const sizeStyles = {
    sm: "h-7 px-3 text-xs",
    default: "h-9 px-4 py-2",
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Link component
// const Link = ({ href, children, className = "", ...props }) => {
//   return (
//     <a href={href} className={className} {...props}>
//       {children}
//     </a>
//   );
// };

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (stored === "dark" || (!stored && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Toggle theme function
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  const links = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/for-you", label: "For You" },
    { href: "/integrations", label: "Integrations" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    // <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-xl border-b border-border/50">
      <div className="max-w-[980px] mx-auto px-6 py-2.5 flex items-center justify-between text-xs">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex aspect-square size-6 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <CircleDotIcon className="size-3" />
          </div>
          <span className="font-semibold text-base text-foreground">Orion</span>
        </Link>

        <nav className="hidden md:flex text-base items-center gap-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "px-3 py-2 rounded-md transition-colors",
                // pathname === href ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-base text-muted-foreground hover:text-foreground h-8 px-4 rounded-full border-none"
            >
              Log In
            </Button>
          </Link>

          {/* <button
            onClick={toggleTheme}
            // className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button> */}
        </div>
      </div>
    </header>
  )
}
