import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import SectionHeader from "../components/SectionHeader";
import ArticleCard from "../components/ArticleCard";
import { ARTICLES, ARTICLES_CATEGORIES } from "../data";

const Articles = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredArticles =
    activeCategory === "Alle"
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === activeCategory);

  return (
    <div>
      {/* Hero Header */}
      <HeroBanner
        title="Articles"
        subtitle="Insights, updates, and stories from our community"
      />

      {/* Articles Grid */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="All Articles" />
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {ARTICLES_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm tracking-wide transition-all duration-200 border cursor-pointer ${
                  activeCategory === cat
                    ? "text-white border-primary bg-primary"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
                style={{
                  background:
                    activeCategory === cat ? "#E65100" : "transparent",
                  fontFamily: "'Lora', serif",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => handleNavigate("/articles")}
              />
            ))}
          </div>

          {/* Empty Fallback */}
          {filteredArticles.length === 0 && (
            <p
              className="text-center text-muted-foreground py-20"
              style={{ fontFamily: "'Lora', serif" }}
            >
              No articles in this category yet.{" "}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Articles;
export { ARTICLES };
