import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { CORPORATE_HOLDINGS } from "@/lib/constants";

export default function CompanyLogosGrid() {
  return (
    <section className="pb-24 px-6 bg-white">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {CORPORATE_HOLDINGS.map((company, index) => (
            <Link
              key={index}
              href={company.href}
              className="flex items-center justify-center bg-neutral-50 border border-neutral-200 rounded-sm p-4 group hover:border-black hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              <div className="relative w-full h-36">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
