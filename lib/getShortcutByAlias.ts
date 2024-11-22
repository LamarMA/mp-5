// lib/shortcuts.ts
import getCollection, { COLLECTION } from "@/db";
import clientPromise from "@/db"
import { ShortcutProps } from "@/app/types";


// lab7
export default async function getShortcutByAlias(
  alias: string,
): Promise<ShortcutProps | null> {
  const client = await clientPromise;
  const shortcutsCollection = await getCollection(COLLECTION);

  // Find the shortcut by alias
  const data = await shortcutsCollection.findOne({ alias });

  if (!data) {
    return null; // Return null if no shortcut is found
  }

  // Construct the ShortcutProps object
  const shortcut: ShortcutProps = {
    id: data._id.toHexString(), // Convert ObjectId to string
    alias: data.alias,
    url: data.url,
  };

  return shortcut;
}