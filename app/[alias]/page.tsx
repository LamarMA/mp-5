// app/[alias]/page.tsx

// dynamic page per alias
import getShortcutByAlias from "@/lib/getShortcutByAlias";


// lab7
export default async function Redirection({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {

  const { alias } = await params
  const shortcut = await getShortcutByAlias(alias);

  if (!shortcut) {
    return <p>No Shortcut for this alias.</p>;
  }

  return (
    <html>
      <head>
        <title>Redirecting...</title>
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("${shortcut.url}");`,
          }}
        ></script>
      </body>
    </html>
  );
}
