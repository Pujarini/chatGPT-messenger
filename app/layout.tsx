import { getServerSession } from "next-auth";
import ClientProvider from "../components/ClientProvider";
import Login from "../components/Login";
import { SessionProvider } from "../components/SessionProvider";
import SidePanel from "../components/SidePanel";
import { authOptions } from "../pages/api/auth/[...nextauth]";

import "../styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />

      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] md:min-w-[20rem] text-white max-w-xs overflow-y-auto">
                <SidePanel />
              </div>
              <ClientProvider />
              <div className="bg-[#353740] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
