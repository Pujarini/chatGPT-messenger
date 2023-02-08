import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body>
        <div className="flex">
          {/**SideBar */}
          {/**Client Provider for notifications */}
          <div className="bg-[#353740] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
