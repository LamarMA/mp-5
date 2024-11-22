import { ShortcutProps } from "../types";

export default function ShortcutPreview({ shortcut }: { shortcut: ShortcutProps }) {
  return (
    <div className="bg-sky-400 rounded-x1 p-4 m-2 2-96">
      <h4 className="font-bold text-3x1">{shortcut.alias}</h4>
      <p>{shortcut.url}</p>
    </div>
  );
}