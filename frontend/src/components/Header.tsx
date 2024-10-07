import Link from "next/link";

export default function Header() {
  return (
    <header 
      className="fixed top-0 left-0 right-0 h-20 flex justify-center items-center bg-[#F7146B] font-semibold text-white"
    >
      <div className="text-center">
        <h1 className="">Checkpoint : frontend</h1>
        <Link href="/">Countries</Link>
      </div>
    </header>
  );
}
