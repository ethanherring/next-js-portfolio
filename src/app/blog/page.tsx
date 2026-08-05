import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <Button variant="ghost" className="-ml-3 px-3" asChild>
          <Link href="/">
            <ArrowLeft />
            Back home
          </Link>
        </Button>

        <div className="mt-20">
          <Badge variant="outline" className="border-primary/40 text-primary">
            Featured writing
          </Badge>
          <h1 className="mt-7 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
            Building software close to the work
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            This post is coming soon. I&apos;m collecting notes on building
            useful software, leading strong teams, and turning operational
            context into durable products.
          </p>
        </div>
      </div>
    </main>
  );
}
