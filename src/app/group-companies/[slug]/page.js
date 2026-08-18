/* src/app/group-companies/[slug]/page.js */
// Server Component – safe to export metadata here
import Image from "next/image";
import { COMPANY_LIST } from "@/lib/company-data";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const company = COMPANY_LIST.find(
    (c) => c.href.split("/").pop() === slug
  );
  return { title: company ? `${company.name} – ROYSONS` : "Company – ROYSONS" };
}

export default async function CompanyPage({ params }) {
  const { slug } = await params;

  // Match slug against last segment of each company's href
  const holding = COMPANY_LIST.find(
    (h) => h.href.split("/").pop() === slug
  );

  if (!holding) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-neutral-50">
        <h1 className="text-2xl font-bold">Company not found</h1>
      </main>
    );
  }

  return (
    <section className="py-12 bg-white min-h-screen font-sans">
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-black uppercase text-neutral-900 mb-6">
          {holding.name}
        </h1>
        {holding.image && (
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src={holding.image}
              alt={holding.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        <p className="text-lg text-neutral-700 mb-4">
          <strong>{holding.subtitle}</strong>
        </p>
        <p className="text-base text-neutral-600">{holding.tagline}</p>
      </div>
    </section>
  );
}
