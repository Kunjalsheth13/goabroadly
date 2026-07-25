import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import FadeIn from "@/components/animations/FadeIn";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with GoAbroadly for study abroad counseling and visa assistance.",
};

export default function ContactPage() {
  return (
    <>
      <style>{`
        .contact-hero {
          padding: 80px 0 60px;
          background: #FAFAFC;
          text-align: center;
        }
        .contact-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 6px;
          background: #FEE2E2;
          color: #DC2626;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
          border: 1px solid #FECACA;
        }
        .contact-title {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          color: #0B2B66;
          margin-bottom: 16px;
          line-height: 1.15;
        }
        .contact-title span {
          color: #DC2626;
        }
        .contact-underline {
          width: 60px;
          height: 4px;
          background: #DC2626;
          margin: 0 auto 20px;
          border-radius: 4px;
        }
        .contact-subtitle {
          font-size: 17px;
          color: #475569;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        .contact-section {
          padding: 60px 0 100px;
          background: #ffffff;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: flex-start;
        }
        .contact-info-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 40px;
        }
        .contact-info-title {
          font-size: 24px;
          font-weight: 800;
          color: #0B2B66;
          margin-bottom: 16px;
        }
        .contact-info-desc {
          font-size: 15px;
          color: #64748B;
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .contact-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #EFF6FF;
          color: #1E3A8A;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-info-content h4 {
          font-size: 15px;
          font-weight: 700;
          color: #0B2B66;
          margin-bottom: 4px;
        }
        .contact-info-content p, .contact-info-content a {
          font-size: 14px;
          color: #64748B;
          text-decoration: none;
          line-height: 1.5;
          transition: color 0.2s ease;
        }
        .contact-info-content a:hover {
          color: #DC2626;
        }
        .contact-form-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(11, 43, 102, 0.04);
        }
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 640px) {
          .contact-hero {
            padding: 50px 0 40px;
          }
          .contact-info-card, .contact-form-card {
            padding: 24px;
            border-radius: 18px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <FadeIn>
            <span className="contact-badge">Get In Touch</span>
            <h1 className="contact-title">
              Let's Talk About Your <span>Study Abroad</span> Journey
            </h1>
            <div className="contact-underline" />
            <p className="contact-subtitle">
              Have questions about admissions, visas, or universities? Our expert counsellors are here to help you every step of the way.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Column: Contact Information */}
            <FadeIn>
              <div className="contact-info-card">
                <h3 className="contact-info-title">Contact Information</h3>
                <p className="contact-info-desc">
                  Fill out the form and our team will get back to you within 24 hours with complete guidance tailored to your profile.
                </p>

                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-icon-wrap">
                      <Phone size={22} strokeWidth={2} />
                    </div>
                    <div className="contact-info-content">
                      <h4>Phone Number</h4>
                      <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon-wrap">
                      <Mail size={22} strokeWidth={2} />
                    </div>
                    <div className="contact-info-content">
                      <h4>Email Address</h4>
                      <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon-wrap">
                      <MapPin size={22} strokeWidth={2} />
                    </div>
                    <div className="contact-info-content">
                      <h4>Office Location</h4>
                      <p>Ahmedabad, Gujarat, India</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon-wrap">
                      <Clock size={22} strokeWidth={2} />
                    </div>
                    <div className="contact-info-content">
                      <h4>Working Hours</h4>
                      <p>Mon - Sat: 9:30 AM - 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right Column: Contact Form */}
            <FadeIn delay={0.2}>
              <div className="contact-form-card">
                <ContactForm />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}