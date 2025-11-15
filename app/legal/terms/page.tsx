import type { Metadata } from "next"
import TermsOfServiceClient from "./TermsOfServiceClient"

export const metadata: Metadata = {
  title: "Terms of Service | Orion",
  description: "Terms and conditions for using Orion by Noble Forge.",
}

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />
}
