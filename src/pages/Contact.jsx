import React, { useState } from "react";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import HeroBanner from "../components/HeroBanner";
import SectionHeader from "../components/SectionHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    navn: "",
    email: "",
    emne: "",
    besked: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 bg-card border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors";

  return (
    <div>
      {/* Hero Header */}
      <HeroBanner
        title="Contact Us"
        subtitle="We are always happy to hear from you"
        image="/lotus_bg.png"
      />

      {/* Contact Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Write to Us"
            subtitle="We strive to respond to your inquiry within 48 hours."
          />

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left side: Form or Success message */}
            <div>
              {submitted ? (
                <div className="p-10 border border-accent/50 bg-card text-center shadow-sm">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-primary"
                    style={{ background: "rgba(230, 81, 0, 0.08)" }}
                  >
                    <Heart size={26} fill="currentColor" />
                  </div>

                  <h3
                    className="text-xl font-semibold mb-2 text-foreground"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Thank you for your message!
                  </h3>

                  <p
                    className="text-muted-foreground text-sm"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    We have received your message and will get back to you as
                    soon as possible. Thank you for reaching out to us!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    {
                      label: "Name *",
                      key: "name",
                      type: "text",
                      placeholder: "Your full name",
                      required: true,
                    },
                    {
                      label: "Email *",
                      key: "email",
                      type: "email",
                      placeholder: "your@email.com",
                      required: true,
                    },
                    {
                      label: "Subject",
                      key: "subject",
                      type: "text",
                      placeholder: "What is this regarding?",
                      required: false,
                    },
                  ].map((field) => (
                    <div key={field.key}>
                      <label
                        className="block text-sm font-medium mb-2 text-foreground"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={formData[field.key]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.key]: e.target.value,
                          })
                        }
                        className={inputClass}
                        placeholder={field.placeholder}
                        style={{ fontFamily: "'Lora', serif" }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      className="block text-sm font-medium mb-2 text-foreground"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      Message *
                    </label>

                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`${inputClass} resize-none`}
                      placeholder="Write your message here..."
                      style={{ fontFamily: "'Lora', serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-white font-medium tracking-wide transition-all duration-200 hover:opacity-90 bg-primary cursor-pointer hover:shadow-md"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right side: Contact Details Info Panel */}
            <div>
              <h3
                className="text-2xl font-semibold mb-3 text-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Get in Touch
              </h3>

              <p
                className="text-muted-foreground leading-relaxed mb-8"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We would love to hear from you. Whether you are interested in
                membership, looking to support our community initiatives, or
                simply wish to learn more about our activities, we warmly
                welcome your inquiry.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: <Mail size={18} />,
                    label: "E-mail",
                    content: (
                      <a
                        href="mailto:kontakt@vaishnavsamaj.dk"
                        className="text-primary hover:underline text-sm font-medium"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        info@vaishnavsamaj.dk{" "}
                      </a>
                    ),
                  },
                  {
                    icon: <Phone size={18} />,
                    label: "Telefon",
                    content: (
                      <a
                        href="tel:+4512345678"
                        className="text-muted-foreground hover:text-primary text-sm transition-colors"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        +45 12 34 56 78
                      </a>
                    ),
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: "Adresse",
                    content: (
                      <div
                        className="text-muted-foreground text-sm leading-relaxed"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        Vaishnav Samaj Danmark
                        <br />
                        Alle 42, 2. sal
                        <br />
                        2200 bangalore N
                      </div>
                    ),
                  },
                ].map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-primary"
                      style={{ background: "rgba(230, 81, 0, 0.08)" }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div
                        className="text-sm font-semibold mb-1 text-foreground"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        {info.label}
                      </div>
                      {info.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Sandalwood Card Accent */}
              <div
                className="p-6 bg-muted/40 border border-border"
                style={{ borderLeft: "3px solid #D4AF37" }}
              >
                <p
                  className="text-sm text-muted-foreground italic leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Vaishnav Samaj is driven by the dedication of volunteers. We
                  regularly organize community gatherings, cultural events, and
                  spiritual programs. Get in touch with us to learn about
                  upcoming events and discover how you can become involved in
                  our growing community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
