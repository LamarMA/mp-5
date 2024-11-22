import DisplayAllShortcuts from "./components/all-shortcuts";
import getAllShortcuts from "@/lib/getAllShortcuts";

// lab7 copy


export default async function Home() {
  const shortcuts = await getAllShortcuts();
  return (
    <div className="flex flex-col items-center min-h-screen bg-black-100 p-6">
      <h1 className="text-3xl font-bold mb-4">URL Shortener</h1>
      <DisplayAllShortcuts inputShortcuts={shortcuts} />
    </div>
  );
}