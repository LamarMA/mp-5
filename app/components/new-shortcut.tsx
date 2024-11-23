import { useState } from "react";
import { Button, FormHelperText, TextField } from "@mui/material";
import { Textarea } from "@mui/joy";


// lab7
export default function NewPost({
  createFunc,
}: {
  createFunc: (alias: string, url: string) => Promise<boolean>;
}) {
  const [alias, setAlias] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function submitNewShortcut() {
    setStatus(null);

    try {
      const success = await createFunc(alias, url);
      if (success) {
        setStatus(`Shortcut created successfully! Try viting /${alias}`);
        setAlias("");
        setUrl("");
      }
    } catch (error: unknown) {
      // type of error is giving my issues
      if (error instanceof Error) {
        setStatus(error.message);
      } else {
        setStatus("Something went wrong."); // fallback error message
      }
    }
  }
  return (
    <div className="w-full flex flex-col items-center">
      {status && status.includes("successfully") ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-600">{status}</h1>
        </div>
      ) : (
        <form
          className="w-96 rounded-x1 p-4 bg-[#C78283]"
          onSubmit={(e) => {
            e.preventDefault();
            submitNewShortcut();
          }}
        >
          <TextField
            variant="filled"
            sx={{ backgroundColor: "white", width: "100%" }}
            label="Alias"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
          <Textarea
            sx={{
              padding: "0.5rem",
              height: "100px",
              width: "100%",
              borderRadius: 0,
            }}
            variant="soft"
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <FormHelperText>Enter a valid URL.</FormHelperText>
          <div className="w-full flex justify-center">
            <Button
              sx={{ width: "80px" }}
              variant="contained"
              type="submit"
              disabled={alias.length === 0 || url.length === 0}
            >
              Create
            </Button>
          </div>
          {status && !status.includes("successfully") && (
            <p className="mt-2 text-center text-red-600">{status}</p>
          )}
        </form>
      )}
    </div>
  );
}