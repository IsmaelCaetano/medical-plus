"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { CAROUSEL_SLIDES, CarouselSlide } from "@/data/carousel";
import { getWhatsAppLink } from "@/data/site-config";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MedicalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchDeltaXRef = useRef<number>(0);
  const wasDraggedRef = useRef<boolean>(false);
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

  // Autoplay (6.0 segundos) com pausa no hover/interação e respeito a prefers-reduced-motion
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

  // Navegação por teclado (quando focado)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
      setIsPaused(true);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
      setIsPaused(true);
    }
  };

  // Suporte a swipe no mobile sem disparar o clique do link acidentalmente
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchDeltaXRef.current = 0;
    wasDraggedRef.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current !== null) {
      touchDeltaXRef.current = e.targetTouches[0].clientX - touchStartXRef.current;
      if (Math.abs(touchDeltaXRef.current) > 10) {
        wasDraggedRef.current = true;
      }
    }
  };

  const onTouchEnd = () => {
    const minSwipeDistance = 45;
    if (Math.abs(touchDeltaXRef.current) > minSwipeDistance) {
      if (touchDeltaXRef.current > minSwipeDistance) {
        prevSlide();
      } else {
        nextSlide();
      }
      setIsPaused(true);
    }
    // Mantém wasDragged ativo por 450ms para engolir qualquer clique fantasma sintetizado no mobile
    setTimeout(() => {
      wasDraggedRef.current = false;
    }, 450);
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (wasDraggedRef.current) {
      e.preventDefault();
    }
  };

  return (
    <section
      aria-label="Carrossel Principal de Equipamentos Médicos e Serviços"
      className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-[72px]"
    >
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Destaques de Equipamentos e Soluções"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="group relative w-full aspect-[1672/941] rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white border border-brand-border/60 outline-none focus-visible:ring-2 focus-visible:ring-brand-green select-none"
      >
        {/* Slides de Imagem Completa */}
        {CAROUSEL_SLIDES.map((slide: CarouselSlide, index: number) => {
          const isActive = index === currentIndex;
          const whatsappUrl = getWhatsAppLink(slide.whatsappMessage);

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} de ${totalSlides}: ${slide.imageAlt}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 z-10 pointer-events-auto"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                aria-label={`Solicitar informações sobre ${slide.title} no WhatsApp`}
                className="block relative w-full h-full cursor-pointer focus-visible:outline-none"
              >
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1440px"
                  className="object-contain object-center w-full h-full"
                />
              </a>
            </div>
          );
        })}

        {/* Setas de Navegação (Sobrepostas e discretas) */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            prevSlide();
            setIsPaused(true);
          }}
          aria-label="Slide anterior"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-brand-darkGreen border border-brand-border/50 shadow-md backdrop-blur-xs flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            nextSlide();
            setIsPaused(true);
          }}
          aria-label="Próximo slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-brand-darkGreen border border-brand-border/50 shadow-md backdrop-blur-xs flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Indicadores (Dots) na parte inferior central sobrepostos */}
        <div
          className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2"
          role="tablist"
          aria-label="Seleção de slides"
        >
          {CAROUSEL_SLIDES.map((slide, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`Ir para slide ${idx + 1}: ${slide.title}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  goToSlide(idx);
                }}
                className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  isSelected
                    ? "w-6 sm:w-7 h-2 bg-brand-green"
                    : "w-2 h-2 bg-white/60 hover:bg-white"
                }`}
              />
            );
          })}
        </div>

        {/* Contador Discreto no Canto Inferior Direito */}
        <div
          aria-hidden="true"
          className="absolute bottom-2.5 sm:bottom-4 right-3 sm:right-5 z-20 bg-black/40 backdrop-blur-sm text-white/90 text-[10px] sm:text-xs font-mono font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full hidden sm:block pointer-events-none"
        >
          {String(currentIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}
