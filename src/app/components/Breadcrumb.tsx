"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="text-sm text-gray-400">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        return (
          <span key={index}>
            {" / "}
            <Link href={href} className="hover:underline">
              {segment.replace(/-/g, " ")}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
