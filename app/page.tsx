import Main from "@/components/main"
import { jsonLd } from "@/lib/schema"

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Main />
    </>
  )
}

