import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Navegação estrutural" className="py-3 text-sm text-brand-textMuted">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center text-brand-textMuted hover:text-brand-darkGreen transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span className="sr-only md:not-sr-only">Início</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-brand-border" />
              {isLast || !item.href ? (
                <span className="font-medium text-brand-textMain truncate max-w-[240px] md:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-brand-darkGreen transition-colors truncate max-w-[200px] md:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
