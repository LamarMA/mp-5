"use server";
import getCollection, { COLLECTION } from "@/db";
import { ShortcutProps } from "@/app/types";
import https from "https";

// lab7
function isValid(url: string) {
  return new Promise((resolve, reject) => {
    try {
      const req = https.get(url, (res) => {

        // got an error that this might be undefined so this is a fallback
        const statusCode = res.statusCode ?? 0;

        // true for 200-300 codes
        if (statusCode >= 200 && statusCode < 300) {
          resolve(true);
        } else {
          resolve(false);
        }

      });

      req.on("error", () => resolve(false));
      req.end();
    } catch (err) {
      resolve(false);
    }
  });
}
export async function createShortcut(
  alias: string,
  url: string
): Promise<ShortcutProps | null> {
  const collection = await getCollection(COLLECTION);

  const existing = await collection.findOne({ alias });
  if (existing) throw new Error("Sorry, someone is already using this alias");

  const validUrl = await isValid(url);
  if (!validUrl) throw new Error("The provided URL is invalid or unreachable");

  const s = {
    alias: alias,
    url: url,
  };

  const res = await collection.insertOne(s);

  if (!res.acknowledged) {
    return null;
  }

  return {
    ...s, id: res.insertedId.toHexString()
  };
}
