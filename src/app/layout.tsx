import Breadcrumb from "@/components/Breadcrumb";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
              <Breadcrumb />
            </nav>
          </header>
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
              &copy; {new Date().getFullYear()} Jeff Ou
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
