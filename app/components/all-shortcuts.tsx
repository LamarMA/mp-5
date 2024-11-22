"use client";


// jeffery code
import { useState } from "react";
import { ShortcutProps } from "@/app/types"; // Define ShortcutProps in your app/types
import NewShortcut from "./new-shortcut"; // Component for creating new shortcuts
import { createShortcut } from "@/lib/createShortcut"; // Function for adding a new shortcut
import ShortcutPreview from "./shortcut-preview";

export default function DisplayAllShortcuts({
  inputShortcuts,
}: {
  inputShortcuts: ShortcutProps[];
}) {
  const [shortcuts, setShortcuts] = useState(inputShortcuts);

  async function addNewShortcut(title: string, content: string) {
    const s = await createShortcut(title, content);
    if (s === null) {
      return false;
    }
    setShortcuts([s, ...shortcuts])
    return true;
  }

  return (
    <div className="flex flex-col items-center">
      <NewShortcut createFunc={addNewShortcut} />

      {/* THIS CODE SHOWS YOU ALL THE SHORTCUTS, USED THIS TO DEBUG */}
      {/* {
        shortcuts.map((s, i) => (
          <ShortcutPreview key={i + s.alias} shortcut={s} />
        ))} */}
    </div>
  );
}