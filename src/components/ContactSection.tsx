"use client";

export default function ContactSection() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "katrinafinney@gmail.com"; // Default fallback

  return (
    <div className="text-center py-16">
      <h2 className="text-3xl font-bold text-teal-400">Get in Touch</h2>
      <p className="mt-4 text-gray-400">Reach out for collaborations or job opportunities.</p>
      <div className="mt-6">
        <a href={`mailto:${email}`} className="text-lg text-teal-500 hover:underline">
          {email}
        </a>
      </div>
    </div>
  );
}
