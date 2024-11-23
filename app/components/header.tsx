// mp-5/app/components/header.tsx

//again stealing jeffery's code
import Link from "next/link";

export default function Header() {
  const linkStyling = "p-1 m-2 text-x1 hover:underline";
  return (
    <header className="flex justify-between items-center h-20 bg-[#F3D9DC] text-black">
      <h2 className="text-4x1 font-semibold p-4"> MP-5</h2>
      <h1 className="text-3xl font-bold mb-4">URL Shortener</h1>
      <nav className="p-2 m-4">
        <Link href="/" className={linkStyling}>Home</Link>
      </nav>
    </header>
  );
}
