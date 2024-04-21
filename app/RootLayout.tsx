import { inter } from "./layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <img src="../../pickachu.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
