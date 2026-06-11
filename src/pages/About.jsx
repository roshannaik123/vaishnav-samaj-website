import React from 'react'
import { Heart, Gift, Leaf, BookOpen, Users } from 'lucide-react'
import HeroBanner from '../components/HeroBanner'
import SectionHeader from '../components/SectionHeader'

const About = () => {
  return (
    <div>
      {/* 1. Page Hero Header */}
      <HeroBanner
        title="About Us"
        subtitle="A community built on bhakti, tradition, and compassion"
        image="/lotus_bg.png"
      />
      
      {/* 2. Main Narrative Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Who is Vaishnav Samaj?" />
          
          <div className="grid md:grid-cols-2 gap-14 mb-20 items-start">
            {/* Left Narrative Text */}
            <div className="space-y-6">
              <p
                className="text-lg leading-relaxed text-foreground/85"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Vaishnav Samaj Denmark is a voluntary, non-profit organization founded by Vaishnavas (devotees of Lord Vishnu and His avatars such as Krishna) living in Denmark. Our association aims to unite the Hindu community, preserve our cultural heritage, and share rich spiritual values with Danish society.
              </p>
              <p
                className="text-base leading-relaxed text-muted-foreground"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Our foundation is built on the philosophy of <strong>bhakti-yoga</strong> — the path of devotion and love. We believe that the highest human joy is achieved when we serve each other selflessly and see the divine light in all living beings.
              </p>
              <p
                className="text-base leading-relaxed text-muted-foreground"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Through weekly gatherings, kirtan meditation, yoga, and philosophical study groups, we create safe and open meeting places. We welcome everyone — regardless of background, religious affiliation, or worldview — in a spirit of inclusivity and mutual respect.
              </p>
            </div>
            
            {/* Right Illustrative Image */}
            <div className="relative overflow-hidden bg-muted" style={{ minHeight: '360px' }}>
              <img
                src="/lotus_bg.png"
                alt="The sacred lotus flower - a symbol of spiritual purity"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/65 to-transparent">
                <p
                  className="text-white/90 text-xs italic"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  The sacred lotus flower — symbolizing purity and spiritual unfolding amidst the waters of life.
                </p>
              </div>
            </div>
          </div>
          
          {/* 3. Highlighting Quote Panel */}
          <div
            className="relative p-10 mb-20 text-center rounded-r-md"
            style={{
              background: 'linear-gradient(135deg, rgba(230, 81, 0, 0.04), rgba(212, 175, 55, 0.06))',
              borderLeft: '4px solid #D4AF37'
            }}
          >
            <div
              className="text-5xl text-accent opacity-50 mb-2 leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "
            </div>
            <p
              className="text-xl md:text-2xl italic leading-relaxed text-foreground/80 font-medium"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bhakti is the path of love — a path that connects all hearts in devotion and selfless service.
            </p>
          </div>
          
          {/* 4. Values Block */}
          <SectionHeader
            title="Our Values"
            subtitle="The five guiding principles of our association"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Heart size={22} />,
                title: 'Bhakti (Devotion)',
                desc: 'We cultivate love and devotion to the divine as the primary source of inner peace, joy, and spiritual awakening.'
              },
              {
                icon: <Gift size={22} />,
                title: 'Seva (Service)',
                desc: 'We perform selfless service for the community, including food distribution (prasadam), charity, and volunteer support.'
              },
              {
                icon: <Leaf size={22} />,
                title: 'Ahimsa (Non-violence)',
                desc: 'We cherish all living beings. We promote non-violence in thought, word, and action, including a compassionate vegetarian lifestyle.'
              },
              {
                icon: <BookOpen size={22} />,
                title: 'Shastra (Knowledge)',
                desc: 'We immerse ourselves in holy scriptures like the Bhagavad Gita to find timeless wisdom and ethical guidelines for everyday life.'
              },
              {
                icon: <Users size={22} />,
                title: 'Satsang (Community)',
                desc: 'We value good and loving company, where we can inspire and support each other on our personal and spiritual journey.'
              }
            ].map((value, i) => (
              <div
                key={i}
                className="p-6 bg-card border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center text-primary flex-shrink-0"
                    style={{ background: 'rgba(230, 81, 0, 0.08)' }}
                  >
                    {value.icon}
                  </div>
                  <h3
                    className="font-semibold text-lg text-foreground"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {value.title}
                  </h3>
                </div>
                
                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default About
