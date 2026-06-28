
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Users,
  FileText,
  ThumbsUp,
  ShieldCheck,
} from "lucide-react";

import Button from "@/components/common/Button";

import heroBg from "@/assets/images/herobg.png";
import heroIcon from "@/assets/images/heroicon.png";
import { colors } from "@/constants/colors";
export default function HeroSection() {
  return (
    <section style={styles.hero}>
      {/* Background */}
      <div style={styles.bgOverlay} />

      <div className="container" style={styles.container}>
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.left}
        >
          <div style={styles.badge}>
          <ShieldCheck
  size={16}
  color={colors.danger}
/>
            Trusted Visa Partner For Your Global Dreams
          </div>

          <h1 style={styles.heading}>
            Your Journey.
            <br />
            Our Expertise.
            <br />
            <span style={styles.redText}>Global Opportunities.</span>
          </h1>

          <p style={styles.subtitle}>
            Expert guidance for Study, Work, Visit & PR Visas.
            <br />
            Turning your international dreams into reality.
          </p>

          <div style={styles.buttons}>
            <Button href="/contact" size="lg">
              Book Free Consultation
            </Button>

            <Button
              href="/countries"
              variant="outline"
              size="lg"
            >
              Explore Countries
            </Button>
          </div>

          {/* Happy clients */}
          <div style={styles.clients}>
            <div style={styles.avatarGroup}>
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/60?img=${i + 10}`}
                  style={styles.avatar}
                />
              ))}
            </div>

            <div>
              <div style={styles.clientTitle}>
                25,000+ Happy Clients
              </div>

              <div style={styles.clientSub}>
                Across 20+ Countries
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={styles.right}
        >
          <img
            src={heroIcon.src}
            alt=""
            style={styles.heroImage}
          />
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <div style={styles.statsWrapper}>
        <div style={styles.stats}>
          <div style={styles.statItem}>
           <Users size={26} color={colors.danger} />

            <div>
              <h4>25,000+</h4>
              <p>Happy Clients</p>
            </div>
          </div>

          <div style={styles.statItem}>
           <Globe size={26} color={colors.primary} />
            <div>
              <h4>20+</h4>
              <p>Countries</p>
            </div>
          </div>

          <div style={styles.statItem}>
           <FileText size={26} color={colors.danger} />

            <div>
              <h4>35,000+</h4>
              <p>Visas Processed</p>
            </div>
          </div>

          <div style={styles.statItem}>
           <ThumbsUp size={26} color={colors.success} />
            <div>
              <h4>98%</h4>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, any> = {
  hero: {
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    backgroundImage: `url(${heroBg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: colors.background,
  },

  bgOverlay: {
    position: "absolute",
    inset: 0,
    background:
      `linear-gradient(
        90deg,
        rgba(255,255,255,0.96) 0%,
        rgba(255,255,255,0.85) 45%,
        rgba(255,255,255,0.30) 100%
      )`,
    zIndex: 1,
  },

  container: {
    position: "relative",
    zIndex: 2,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "48px",
    paddingTop: "40px",
    paddingBottom: "140px",
  },

  left: {
    maxWidth: "620px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: colors.glass,
    border: `1px solid ${colors.glassBorder}`,
    padding: "10px 18px",
    borderRadius: "999px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    color: colors.primary,
    fontWeight: 600,
    fontSize: "13px",
    marginBottom: "28px",
  },

 heading: {
  fontSize: "clamp(3rem, 4vw, 4.5rem)",
  lineHeight: 1.05,
  fontWeight: 700,
  letterSpacing: "-2px",
  marginBottom: "24px",
  color: colors.textPrimary,
  fontFamily: '"Playfair Display", serif',
},
redText: {
  color: colors.danger,
  whiteSpace: "nowrap",   // IMPORTANT
  display: "inline-block",
},  

  subtitle: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: colors.textSecondary,
    marginBottom: "40px",
  },

  buttons: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
    marginBottom: "42px",
  },

  clients: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },

  avatarGroup: {
    display: "flex",
  },

  avatar: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: `3px solid ${colors.background}`,
    marginLeft: "-10px",
    objectFit: "cover",
  },

  clientTitle: {
    fontWeight: 700,
    fontSize: "18px",
    color: colors.textPrimary,
  },

  clientSub: {
    color: colors.textSecondary,
    fontSize: "14px",
  },

  right: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  heroImage: {
    width: "100%",
    maxWidth: "720px",
    objectFit: "contain",
    filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.08))",
  },

  statsWrapper: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    marginTop: "-30px",
    marginBottom: "40px",
  },

  stats: {
    background: colors.glass,
    backdropFilter: "blur(24px)",
    border: `1px solid ${colors.glassBorder}`,
    borderRadius: "24px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
    padding: "24px 40px",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "40px",
    minWidth: "900px",
  },

  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    color: colors.textPrimary,
  },

  statNumber: {
    fontSize: "20px",
    fontWeight: 700,
    color: colors.textPrimary,
  },

  statLabel: {
    fontSize: "13px",
    color: colors.textMuted,
  },
};