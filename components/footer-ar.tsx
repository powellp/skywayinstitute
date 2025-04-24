import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-skyway-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" dir="rtl">
          <div>
            <div className="flex items-center flex-row-reverse">
              <span className="text-2xl font-bold text-white">سكاي واي</span>
              <span className="mr-1 text-2xl font-light text-skyway-300">معهد</span>
            </div>
            <p className="mt-4 text-sm text-gray-300 text-right">
              الوجهة الأولى في دبي للنمو المهني. تمكين المهنيين والشركات منذ عام 2021.
            </p>
            <div className="mt-6 flex space-x-4 flex-row-reverse">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">فيسبوك</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">انستغرام</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">تويتر</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">لينكد إن</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-skyway-300 text-right">روابط سريعة</h3>
            <ul role="list" className="mt-4 space-y-2 text-right">
              <li>
                <Link href="/ar-AE/about" className="text-sm text-gray-300 hover:text-white">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/ar-AE/services" className="text-sm text-gray-300 hover:text-white">
                  ماذا نفعل
                </Link>
              </li>
              <li>
                <Link href="/ar-AE/courses" className="text-sm text-gray-300 hover:text-white">
                  الدورات
                </Link>
              </li>
              <li>
                <Link href="/ar-AE/corporate" className="text-sm text-gray-300 hover:text-white">
                  خدمات الشركات
                </Link>
              </li>
              <li>
                <Link href="/ar-AE/contact" className="text-sm text-gray-300 hover:text-white">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-skyway-300 text-right">
              الدورات الشائعة
            </h3>
            <ul role="list" className="mt-4 space-y-2 text-right">
              <li>
                <Link href="/ar-AE/courses/software-it" className="text-sm text-gray-300 hover:text-white">
                  تطوير البرمجيات وتكنولوجيا المعلومات
                </Link>
              </li>
              <li>
                <Link href="/ar-AE/courses/business-management" className="text-sm text-gray-300 hover:text-white">
                  إدارة الأعمال
                </Link>
              </li>
              <li>
                <Link href="/ar-AE/courses/engineering-cad" className="text-sm text-gray-300 hover:text-white">
                  الهندسة والتصميم بمساعدة الكمبيوتر
                </Link>
              </li>
              <li>
                <Link href="/ar-AE/courses/cybersecurity" className="text-sm text-gray-300 hover:text-white">
                  الأمن السيبراني
                </Link>
              </li>
              <li>
                <Link href="/ar-AE/courses/languages" className="text-sm text-gray-300 hover:text-white">
                  اللغات والتواصل
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-skyway-300 text-right">اتصل بنا</h3>
            <ul role="list" className="mt-4 space-y-3 text-right">
              <li className="flex items-start flex-row-reverse">
                <MapPin className="h-5 w-5 text-skyway-300 ml-2 mt-0.5" />
                <span className="text-sm text-gray-300">دبي، الإمارات العربية المتحدة</span>
              </li>
              <li className="flex items-center flex-row-reverse">
                <Phone className="h-5 w-5 text-skyway-300 ml-2" />
                <span className="text-sm text-gray-300">+971 4 XXX XXXX</span>
              </li>
              <li className="flex items-center flex-row-reverse">
                <Mail className="h-5 w-5 text-skyway-300 ml-2" />
                <span className="text-sm text-gray-300">info@skywayinstitute.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} SKYWAY Institute. جميع الحقوق محفوظة. معتمد من قبل دائرة التنمية
            الاقتصادية في دبي وهيئة المعرفة والتنمية البشرية.
          </p>
        </div>
      </div>
    </footer>
  )
}
