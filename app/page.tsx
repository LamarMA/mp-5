import DisplayAllShortcuts from "./components/all-shortcuts";
import getAllShortcuts from "@/lib/getAllShortcuts";

// lab7 copy


export default async function Home() {
  const shortcuts = await getAllShortcuts();
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#744253] p-6">
      <DisplayAllShortcuts inputShortcuts={shortcuts} />
    </div>
  );
}