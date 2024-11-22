import getCollection, { COLLECTION } from "@/db";
import { ShortcutProps } from "@/app/types";

export default async function getAllShortcuts(): Promise<ShortcutProps[]> {
  const shortcutsCollection = await getCollection(COLLECTION);
  const data = await shortcutsCollection.find().toArray();

  const shortcuts: ShortcutProps[] = data.map((s) => ({
    id: s._id.toHexString(),
    alias: s.alias,
    url: s.url,
  })

  );
  return shortcuts.reverse();
}