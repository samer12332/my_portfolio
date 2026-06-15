"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface SectionPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  sectionLabel: string;
}

export default function SectionPagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  sectionLabel,
}: SectionPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination className={cn("mt-10", className)} aria-label={`${sectionLabel} pagination`}>
      <PaginationContent className="flex-wrap gap-2">
        <PaginationItem>
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label={`Go to previous ${sectionLabel} page`}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 transition-colors hover:border-cyan-300/40 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <PaginationItem key={page}>
            <button
              type="button"
              onClick={() => onPageChange(page)}
              aria-label={`Go to ${sectionLabel} page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              className={cn(
                "min-w-10 rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300",
                currentPage === page
                  ? "border-transparent bg-gradient-to-r from-cyan-300 to-blue-400 text-slate-950"
                  : "border-white/10 bg-white/[0.03] text-slate-200 hover:border-cyan-300/40 hover:text-cyan-200",
              )}
            >
              {page}
            </button>
          </PaginationItem>
        ))}

        <PaginationItem>
          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label={`Go to next ${sectionLabel} page`}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 transition-colors hover:border-cyan-300/40 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
