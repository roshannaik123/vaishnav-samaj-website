import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SectionHeader from "../components/SectionHeader";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "../data";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("alle");

  const filteredItems =
    activeCategory === "alle"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Hero Header */}
      <HeroBanner
        title="Gallery"
        subtitle="Photos from our events, community initiatives, and cultural celebrations"
      />

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Our Photo Gallery" />
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 text-sm tracking-wide transition-all duration-200 border cursor-pointer ${
                  activeCategory === cat.id
                    ? "text-white border-primary bg-primary"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
                style={{
                  background:
                    activeCategory === cat.id ? "#E65100" : "transparent",
                  fontFamily: "'Lora', serif",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Columns Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden group cursor-pointer bg-muted break-inside-avoid shadow-sm border border-border/20 hover:shadow-md transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay caption */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <p
                      className="text-white text-sm font-semibold"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty Fallback */}
          {filteredItems.length === 0 && (
            <p
              className="text-center text-muted-foreground py-20"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Ingen billeder i denne kategori endnu.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
export { GALLERY_ITEMS };
