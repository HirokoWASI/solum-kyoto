"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PRIMARY_NAV, SITE } from "@/lib/site";

// グローバルヘッダ。スクロールで背景を強める。
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur border-b border-light-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto h-16 md:h-20 px-5 md:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-serif text-lg md:text-xl tracking-[0.18em]">{SITE.brandJa}</span>
          <span className="hidden md:inline h-latin text-xs text-mid">{SITE.brandLatin}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center text-xs tracking-[0.12em] text-charcoal hover:text-mid transition"
            >
              <span>{item.label}</span>
              <span className="h-latin text-[10px] text-mid opacity-60 group-hover:opacity-100">
                {item.labelEn}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/access" className="text-[11px] tracking-widest text-mid hover:text-charcoal">
            ACCESS
          </Link>
          <a
            href="#book"
            className="btn btn--solid !py-3 !px-5 !text-[11px]"
          >
            予約する
          </a>
        </div>

        <button
          aria-label="メニュー"
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="1.4">
            {open ? <path d="M6 6 L18 18 M18 6 L6 18" /> : <path d="M3 7 H21 M3 12 H21 M3 17 H21" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-light-line bg-cream">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-light-line/60 pb-3"
              >
                <span className="text-sm tracking-[0.1em]">{item.label}</span>
                <span className="h-latin text-xs text-mid">{item.labelEn}</span>
              </Link>
            ))}
            <a href="#book" className="btn btn--solid mt-2 self-start">予約する</a>
          </nav>
        </div>
      )}
    </header>
  );
}
