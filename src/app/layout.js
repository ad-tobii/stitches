import "./globals.css";

export const metadata = {
  title: "Àṣàkẹ́ | Tailoring & Fashion Design",
  description: "Dark luxury tailoring and fashion design atelier.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-bg font-body text-text-main">
        {children}
      </body>
    </html>
  );
}
