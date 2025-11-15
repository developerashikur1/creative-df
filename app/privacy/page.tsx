import type { Metadata } from "next"
import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata: Metadata = {
  title: "Privacy Policy | Orion",
  description: "Your data, on your terms. Learn how Orion protects your privacy.",
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />
}
