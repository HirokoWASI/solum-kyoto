"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PRIMARY_NAV, SITE } from "@/lib/site";
import { Logo } from "@/components/Logo";

// グローバルヘッダ。スクロール前は暗いグラデーション + 白文字、スクロール後は cream + 黒文字に切替える。
// これによりどの背景の上でも視認性を確保する。
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = !scrolled; // 上部：白文字モード

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur border-b border-light-line"
          : "bg-gradient-to-b from-black/55 via-black/25 to-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className="max-w-content mx-auto h-16 md:h-20 px-5 md:px-10 flex items-center justify-between">
        <Link
          href="/"
          aria-label={`${SITE.brandJa} — ホーム`}
          className={`flex items-center gap-3 transition-colors ${light ? "text-cream" : "text-charcoal"}`}
        >
          {/* Sマークの小ロゴ */}
          <Logo variant="mark" className="h-9 md:h-11 w-auto" alt="" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base md:text-lg tracking-[0.12em] lowercase">{SITE.brandJa}</span>
            <span className={`mt-1 h-latin text-[10px] tracking-[0.3em] ${light ? "text-cream/70" : "text-mid"}`}>
              {SITE.brandSub}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex flex-col items-center text-xs tracking-[0.12em] transition ${
                light ? "text-cream hover:text-cream/70" : "text-charcoal hover:text-mid"
              }`}
            >
              <span>{item.label}</span>
              <span
                className={`h-latin text-[10px] opacity-60 group-hover:opacity-100 ${
                  light ? "text-cream/75" : "text-mid"
                }`}
              >
                {item.labelEn}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/access"
            className={`text-[11px] tracking-widest transition ${
              light ? "text-cream/85 hover:text-cream" : "text-mid hover:text-charcoal"
            }`}
          >
            ACCESS
          </Link>
          <a
            href="#book"
            className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] tracking-[0.18em] uppercase border transition ${
              light
                ? "bg-cream/15 text-cream border-cream/60 hover:bg-cream hover:text-charcoal"
                : "bg-charcoal text-cream border-charcoal hover:bg-[#2C2925]"
            }`}
          >
            予約する
          </a>
        </div>

        <button
          aria-label="メニュー"
          className={`lg:hidden p-2 ${light ? "text-cream" : "text-charcoal"}`}
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
                className="flex items-baseline justify-between border-b border-light-line/60 pb-3 text-charcoal"
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
