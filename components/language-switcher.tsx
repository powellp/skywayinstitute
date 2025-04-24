"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const switchToEnglish = () => {
    if (pathname.startsWith("/ar-AE")) {
      const newPath = pathname.replace("/ar-AE", "") || "/"
      router.push(newPath)
    }
  }

  const switchToArabic = () => {
    if (!pathname.startsWith("/ar-AE")) {
      const newPath = `/ar-AE${pathname === "/" ? "" : pathname}`
      router.push(newPath)
    }
  }

  const currentLanguage = pathname.startsWith("/ar-AE") ? "العربية" : "English"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={switchToEnglish} className={!pathname.startsWith("/ar-AE") ? "bg-gray-100" : ""}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={switchToArabic} className={pathname.startsWith("/ar-AE") ? "bg-gray-100" : ""}>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
