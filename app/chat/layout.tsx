
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <div className="flex w-full min-h-screen">
            <Sidebar />
            <main className="flex-1">
                <Header />
                {children}
            </main>
        </div>
  );
}
