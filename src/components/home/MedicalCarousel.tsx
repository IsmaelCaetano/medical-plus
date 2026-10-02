"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { CAROUSEL_SLIDES, CarouselSlide } from "@/data/carousel";
import { SITE_CONFIG, getWhatsAppLink } from "@/data/site-config";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Pause,
  Play,
} from "lucide-react";

export function MedicalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = CAROUSEL_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
  };

  // Autoplay logic (6 seconds) with prefers-reduced-motion check
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
      setIsPaused(true);
    } else if (e.key === "ArrowRight") {
      nextSlide();
      setIsPaused(true);
    }
  };

  // Swipe handling for touch devices
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
      setIsPaused(true);
    } else if (isRightSwipe) {
      prevSlide();
      setIsPaused(true);
    }
  };

  const currentSlide: CarouselSlide = CAROUSEL_SLIDES[currentIndex];

  return (
    <section
      aria-label="Carrossel de Equipamentos e Soluções Médicas"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
    >
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Equipamentos em Destaque"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="relative bg-white rounded-3xl border border-brand-border shadow-md overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-brand-green/70 transition-all duration-300"
      >
        {/* Slides Container */}
        <div className="relative min-h-[580px] sm:min-h-[520px] lg:min-h-[460px] flex items-stretch">
          {CAROUSEL_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} de ${totalSlides}: ${slide.title}`}
                aria-hidden={!isActive}
                className={`absolute inset-0 w-full h-full flex flex-col lg:flex-row items-stretch transition-opacity duration-700 ease-in-out ${
                  isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* Lado Esquerdo / Texto do Slide */}
                <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 flex flex-col justify-between order-2 lg:order-1 bg-white">
                  <div>
                    {/* Badge de Categoria */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-softLime text-brand-darkGreen text-xs font-bold uppercase tracking-wider mb-4 border border-brand-border">
                      <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                      <span>{slide.category}</span>
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold font-heading text-brand-textMain tracking-tight leading-tight mb-3">
                      {slide.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed mb-5">
                      {slide.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2.5 mb-6" aria-label="Destaques técnicos">
                      {slide.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-textMain">
                          <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <a
                      href={getWhatsAppLink(slide.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 bg-brand-green hover:bg-brand-greenHover text-white px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold shadow-sm hover:shadow-md transition-all min-h-[48px] w-full sm:w-auto"
                    >
                      <MessageCircle className="w-5 h-5 fill-current flex-shrink-0" />
                      <span>{slide.cta}</span>
                    </a>
                  </div>
                </div>

                {/* Lado Direito / Imagem do Slide */}
                <div className="w-full lg:w-1/2 relative bg-gradient-to-br from-brand-bgAlt/60 to-brand-softLime/20 order-1 lg:order-2 flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                  <div className="relative w-full h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[380px] rounded-2xl overflow-hidden shadow-xs border border-brand-border/40">
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                      className="object-cover object-center transition-transform duration-700 ease-out hover:scale-102"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Barra de Navegação Inferior / Controles */}
        <div className="bg-brand-bgAlt/80 border-t border-brand-border/70 px-4 sm:px-8 py-3.5 flex items-center justify-between z-20 relative">
          {/* Indicadores de Slide */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Slides do carrossel">
            {CAROUSEL_SLIDES.map((slide, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Ir para slide ${idx + 1}: ${slide.category}`}
                  onClick={() => goToSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green ${
                    isSelected
                      ? "w-8 bg-brand-green"
                      : "w-2.5 bg-brand-border hover:bg-brand-textMuted/40"
                  }`}
                />
              );
            })}
          </div>

          {/* Contador e Controles de Seta */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold font-mono text-brand-darkGreen tracking-wider hidden sm:inline-block">
              {String(currentIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </span>

            {/* Botão Play/Pause para acessibilidade */}
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Retomar reprodução automática" : "Pausar reprodução automática"}
              className="p-1.5 rounded-lg text-brand-textMuted hover:text-brand-darkGreen hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            {/* Setas Anterior / Próximo */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  prevSlide();
                  setIsPaused(true);
                }}
                aria-label="Slide anterior"
                className="w-8 h-8 rounded-full bg-white hover:bg-brand-softLime text-brand-textMain hover:text-brand-darkGreen border border-brand-border flex items-center justify-center shadow-2xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  nextSlide();
                  setIsPaused(true);
                }}
                aria-label="Próximo slide"
                className="w-8 h-8 rounded-full bg-white hover:bg-brand-softLime text-brand-textMain hover:text-brand-darkGreen border border-brand-border flex items-center justify-center shadow-2xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
