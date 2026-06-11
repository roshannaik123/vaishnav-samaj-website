import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Heart, Users, ArrowRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ArticleCard from "../components/ArticleCard";
import { ARTICLES, GALLERY_ITEMS } from "../data";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {/* 1. Hero Landing Banner */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/hero_bg.png)",
          }}
        />

        {/* Soft spiritual gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15, 76, 92, 0.72) 0%, rgba(230, 81, 0, 0.62) 45%, rgba(28, 20, 14, 0.88) 100%)",
          }}
        />

        {/* Diamond pattern SVG overlay */}

        <div className="absolute inset-0 opacity-[0.06]">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="heritage-pattern"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                {/* Outer diamond */}
                <path
                  d="M50,10 L90,50 L50,90 L10,50 Z"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />

                {/* Connecting diamonds */}
                <path d="M50,0 L50,10" stroke="white" strokeWidth="0.5" />
                <path d="M100,50 L90,50" stroke="white" strokeWidth="0.5" />
                <path d="M50,100 L50,90" stroke="white" strokeWidth="0.5" />
                <path d="M0,50 L10,50" stroke="white" strokeWidth="0.5" />

                {/* Decorative center */}
                <circle cx="50" cy="50" r="4" fill="white" />
                <circle
                  cx="50"
                  cy="50"
                  r="10"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#heritage-pattern)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-3 px-6 py-2 mb-10
             rounded-full
             bg-white/10 backdrop-blur-sm
             border border-white/20
             text-amber-100
             text-xs uppercase tracking-[0.3em]
             shadow-lg shadow-black/10"
            style={{ fontFamily: "'Lora', serif" }}
          >
            ✦ Cultural & Spiritual Community ✦
          </span>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl text-white font-bold tracking-[0.18em] uppercase mb-5"
            style={{
              fontFamily: "'Cinzel', 'Times New Roman', serif",
              textShadow: "0 4px 32px rgba(0,0,0,0.45)",
            }}
          >
            VAISHNAV SAMAJ
          </h1>

          <div
            className="w-20 h-px mx-auto mb-6"
            style={{ background: "#D4AF37" }}
          />

          <p
            className="text-xl md:text-2xl text-white/90 mb-3 font-light italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A heartfelt community for Vaishnavism in Denmark
          </p>

          <p
            className="text-white/70 max-w-lg mx-auto mb-12 text-base leading-relaxed"
            style={{ fontFamily: "'Lora', serif" }}
          >
            We bring the rich traditions of Vaishnavism, bhakti meditation, and
            seva service to life through weekly events, talks, and festivals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavigate("/About-us")}
              className="px-9 py-3.5 text-white font-medium tracking-wide transition-all duration-200 hover:bg-white/10 border cursor-pointer"
              style={{
                borderColor: "rgba(212, 175, 55, 0.75)",
                fontFamily: "'Lora', serif",
              }}
            >
              Learn More About Us
            </button>
            <button
              onClick={() => handleNavigate("/contact")}
              className="px-9 py-3.5 text-white font-medium tracking-wide transition-all duration-200 hover:opacity-90 cursor-pointer"
              style={{ background: "#E65100", fontFamily: "'Lora', serif" }}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/*  */}
      </section>

      {/* 2. Welcome Features Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Welcome to Vaishnav Samaj"
            subtitle="A community rooted in ancient spiritual traditions"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <BookOpen size={22} />,
                title: "Bhakti & Tradition",
                desc: "We celebrate timeless Hindu traditions through kirtan singing, prayer, meditation, and the study of holy scriptures like the Bhagavad Gita.",
              },
              {
                icon: <Heart size={22} />,
                title: "Seva & Ahimsa",
                desc: "We practice compassion and selfless service (seva) for the community and protection of all life through a vegetarian lifestyle (ahimsa).",
              },
              {
                icon: <Users size={22} />,
                title: "Community & Dialogue",
                desc: "We bring people of all generations together through festivals like Janmashtami and Diwali, building bridges with the broader Danish society.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="
                text-center p-8
                bg-gradient-to-b from-background to-muted/20
                border border-border/60
                rounded-2xl
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
              hover:border-primary/30
                transition-all duration-500
                group
"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(230, 81, 0, 0.08)" }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-lg font-semibold mb-3 text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-lg leading-relaxed text-foreground/80 mb-5 font-normal"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Vaishnav Samaj Denmark is a non-profit organization founded to
              promote spiritual growth and cultural understanding. Our mission
              is to give the Hindu community in Denmark a gathering place built
              on mutual love and respect.
            </p>
            <p
              className="text-base leading-relaxed text-muted-foreground"
              style={{ fontFamily: "'Lora', serif" }}
            >
              We regularly organize kirtan evenings, yoga sessions, vegetarian
              cooking classes, and social gatherings. Everyone is welcome —
              whether you were born into the tradition, are seeking meditation,
              or are simply curious to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="py-28 px-6 bg-background relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          ```
          <div className="text-center mb-16">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-[0.3em] mb-6"
              style={{ fontFamily: "'Lora', serif" }}
            >
              ✦ Since Generations ✦
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Welcome to Samyukt Gujarati Samaj
            </h2>

            <p
              className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
              A vibrant community dedicated to preserving Gujarati heritage,
              strengthening cultural bonds, and creating meaningful connections
              for generations of families across Bengaluru.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <BookOpen size={24} />,
                title: "Heritage & Culture",
                desc: "Preserving Gujarati traditions, language, arts, and values through cultural programs, educational initiatives, and celebrations throughout the year.",
              },
              {
                icon: <Users size={24} />,
                title: "Community & Togetherness",
                desc: "Building lasting relationships through family events, youth engagement, social gatherings, and opportunities for every generation to connect.",
              },
              {
                icon: <Heart size={24} />,
                title: "Service & Contribution",
                desc: "Encouraging volunteerism, charitable initiatives, and community support activities that create a positive impact beyond our organization.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border hover:border-primary/30 transition-all duration-500 p-8 rounded-2xl hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  <h3
                    className="text-xl font-semibold mb-4 text-foreground"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-muted-foreground leading-relaxed"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="border-y border-border py-12">
              <p
                className="text-xl leading-relaxed text-foreground mb-6"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Samyukt Gujarati Samaj serves as a cultural home where
                traditions are cherished, friendships are nurtured, and families
                come together to celebrate the spirit of Gujarat.
              </p>

              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Through Navratri, Uttarayan, cultural festivals, youth programs,
                community outreach, and social initiatives, we continue to
                strengthen our shared identity while creating opportunities for
                future generations to stay connected to their roots.
              </p>
            </div>
          </div>
          ```
        </div>
      </section> */}

      {/* 3. Articles Preview Section */}
      <section className="py-24 px-6 bg-muted/40 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-2">
            <h2
              className="text-3xl font-semibold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Latest Articles
            </h2>
            <button
              onClick={() => handleNavigate("/articles")}
              className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200 cursor-pointer font-medium"
              style={{ fontFamily: "'Lora', serif" }}
            >
              View all <ArrowRight size={15} />
            </button>
          </div>
          <div
            className="w-full h-px mb-8"
            style={{ background: "rgba(230, 81, 0, 0.15)" }}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {ARTICLES.slice(0, 3).map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => handleNavigate("/articles")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Gallery Preview Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-2">
            <h2
              className="text-3xl font-semibold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Gallery
            </h2>
            <button
              onClick={() => handleNavigate("/gallery")}
              className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200 cursor-pointer font-medium"
              style={{ fontFamily: "'Lora', serif" }}
            >
              View all photos <ArrowRight size={15} />
            </button>
          </div>
          <div
            className="w-full h-px mb-8"
            style={{ background: "rgba(230, 81, 0, 0.15)" }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden group cursor-pointer bg-muted"
                style={{ paddingBottom: "75%" }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-end">
                  <span
                    className="p-3 text-white text-xs translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call To Action (CTA) Section */}
      <section
        className="py-28 px-6 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0F4C5C 0%, #E65100 100%)",
        }}
      >
        {/* CTA diamond overlay pattern */}
        <div className="absolute inset-0 opacity-[0.055]">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="cta-geo"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <polygon
                  points="20,3 37,20 20,37 3,20"
                  stroke="white"
                  strokeWidth="0.9"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-geo)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-white font-semibold mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Become Part of the Community
          </h2>
          <div className="w-24 h-px bg-white/30 my-6 mx-auto" />
          <p
            className="text-white/70 text-lg mb-10 leading-relaxed"
            style={{ fontFamily: "'Lora', serif" }}
          >
            We welcome everyone — whether you seek spiritual depth, wish to
            perform seva service, or are simply curious. Take the first step and
            contact us today.
          </p>
          <button
            onClick={() => handleNavigate("/contact")}
            className="px-10 py-4 font-semibold tracking-wide transition-all duration-200 hover:opacity-95 hover:-translate-y-0.5 transform bg-accent text-foreground hover:shadow-lg cursor-pointer"
            style={{
              fontFamily: "'Lora', serif",
            }}
          >
            Write to Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
