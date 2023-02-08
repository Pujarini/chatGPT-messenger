import SidePanel from "../components/SidePanel";
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
          <div className="bg-[#202123] md:min-w-[20rem] text-white max-w-xs overflow-y-auto">
            <SidePanel />
          </div>
          {/**Client Provider for notifications */}
          <div className="bg-[#353740] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
