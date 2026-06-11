import React from "react";
import HeroBanner from "../components/HeroBanner";
import SectionHeader from "../components/SectionHeader";
import { BOARD_MEMBERS } from "../data";

const Board = () => {
  return (
    <div>
      {/* Hero Header */}
      <HeroBanner
        title="Board of Directors"
        subtitle="Meet the dedicated individuals behind Vaishnav Samaj Denmark"
      />

      {/* Board Profiles Grid */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Board"
            subtitle="Members elected to lead and support the organization's cultural and community activities"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BOARD_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-card border border-border p-8 hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Avatar Badge with gradient background */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-5 flex-shrink-0"
                  style={{
                    background: member.gradient,
                    fontFamily: "'Cinzel', serif",
                  }}
                >
                  {member.initials}
                </div>

                <h3
                  className="text-xl font-semibold mb-1 text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {member.name}
                </h3>

                <div
                  className="text-sm font-medium mb-1 tracking-wide"
                  style={{ color: "#E65100", fontFamily: "'Lora', serif" }}
                >
                  {member.title}
                </div>

                <div
                  className="w-8 h-px mb-4"
                  style={{ background: "#D4AF37" }}
                />

                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Info Card */}
          <div className="mt-16 text-center p-8 bg-muted/40 border border-border">
            <p
              className="text-muted-foreground text-sm leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
              The Board is elected by the members of the organization at the
              Annual General Meeting. If you have any questions or would like to
              contribute as a volunteer, you are always welcome to contact us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Board;
export { BOARD_MEMBERS };
