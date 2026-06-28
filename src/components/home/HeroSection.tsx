
// "use client";

// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Globe,
//   Users,
//   FileText,
//   ThumbsUp,
//   ShieldCheck,
// } from "lucide-react";

// import Button from "@/components/common/Button";

// import heroBg from "@/assets/images/herobg.png";
// import heroIcon from "@/assets/images/heroicon.png";
// import { colors } from "@/constants/colors";
// export default function HeroSection() {
//   return (
//     <section style={styles.hero}>
//       {/* Background */}
//       <div style={styles.bgOverlay} />

//       <div className="container" style={styles.container}>
//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           style={styles.left}
//         >
//           <div style={styles.badge}>
//           <ShieldCheck
//   size={16}
//   color={colors.danger}
// />
//             Trusted Visa Partner For Your Global Dreams
//           </div>

//           <h1 style={styles.heading}>
//             Your Journey.
//             <br />
//             Our Expertise.
//             <br />
//             <span style={styles.redText}>Global Opportunities.</span>
//           </h1>

//           <p style={styles.subtitle}>
//             Expert guidance for Study, Work, Visit & PR Visas.
//             <br />
//             Turning your international dreams into reality.
//           </p>

//           <div style={styles.buttons}>
//             <Button href="/contact" size="lg">
//               Book Free Consultation
//             </Button>

//             <Button
//               href="/countries"
//               variant="outline"
//               size="lg"
//             >
//               Explore Countries
//             </Button>
//           </div>

//           {/* Happy clients */}
//           <div style={styles.clients}>
//             <div style={styles.avatarGroup}>
//               {[1, 2, 3, 4].map((i) => (
//                 <img
//                   key={i}
//                   src={`https://i.pravatar.cc/60?img=${i + 10}`}
//                   style={styles.avatar}
//                 />
//               ))}
//             </div>

//             <div>
//               <div style={styles.clientTitle}>
//                 25,000+ Happy Clients
//               </div>

//               <div style={styles.clientSub}>
//                 Across 20+ Countries
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           style={styles.right}
//         >
//           <img
//             src={heroIcon.src}
//             alt=""
//             style={styles.heroImage}
//           />
//         </motion.div>
//       </div>

//       {/* Bottom Stats */}
//       <div style={styles.statsWrapper}>
//         <div style={styles.stats}>
//           <div style={styles.statItem}>
//            <Users size={26} color={colors.danger} />

//             <div>
//               <h4>25,000+</h4>
//               <p>Happy Clients</p>
//             </div>
//           </div>

//           <div style={styles.statItem}>
//            <Globe size={26} color={colors.primary} />
//             <div>
//               <h4>20+</h4>
//               <p>Countries</p>
//             </div>
//           </div>

//           <div style={styles.statItem}>
//            <FileText size={26} color={colors.danger} />

//             <div>
//               <h4>35,000+</h4>
//               <p>Visas Processed</p>
//             </div>
//           </div>

//           <div style={styles.statItem}>
//            <ThumbsUp size={26} color={colors.success} />
//             <div>
//               <h4>98%</h4>
//               <p>Success Rate</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// const styles: Record<string, any> = {
//   hero: {
//     position: "relative",
//     overflow: "hidden",
//     minHeight: "100vh",
//     backgroundImage: `url(${heroBg.src})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     backgroundColor: colors.background,
//   },

//   bgOverlay: {
//     position: "absolute",
//     inset: 0,
//     background:
//       `linear-gradient(
//         90deg,
//         rgba(255,255,255,0.96) 0%,
//         rgba(255,255,255,0.85) 45%,
//         rgba(255,255,255,0.30) 100%
//       )`,
//     zIndex: 1,
//   },

//   container: {
//     position: "relative",
//     zIndex: 2,
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     alignItems: "center",
//     gap: "48px",
//     paddingTop: "40px",
//     paddingBottom: "140px",
//   },

//   left: {
//     maxWidth: "620px",
//   },

//   badge: {
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "8px",
//     background: colors.glass,
//     border: `1px solid ${colors.glassBorder}`,
//     padding: "10px 18px",
//     borderRadius: "999px",
//     boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
//     color: colors.primary,
//     fontWeight: 600,
//     fontSize: "13px",
//     marginBottom: "28px",
//   },

//  heading: {
//   fontSize: "clamp(3rem, 4vw, 4.5rem)",
//   lineHeight: 1.05,
//   fontWeight: 700,
//   letterSpacing: "-2px",
//   marginBottom: "24px",
//   color: colors.textPrimary,
//   fontFamily: '"Playfair Display", serif',
// },
// redText: {
//   color: colors.danger,
//   whiteSpace: "nowrap",   // IMPORTANT
//   display: "inline-block",
// },  

//   subtitle: {
//     fontSize: "18px",
//     lineHeight: 1.8,
//     color: colors.textSecondary,
//     marginBottom: "40px",
//   },

//   buttons: {
//     display: "flex",
//     gap: "18px",
//     flexWrap: "wrap",
//     marginBottom: "42px",
//   },

//   clients: {
//     display: "flex",
//     alignItems: "center",
//     gap: "18px",
//   },

//   avatarGroup: {
//     display: "flex",
//   },

//   avatar: {
//     width: "42px",
//     height: "42px",
//     borderRadius: "50%",
//     border: `3px solid ${colors.background}`,
//     marginLeft: "-10px",
//     objectFit: "cover",
//   },

//   clientTitle: {
//     fontWeight: 700,
//     fontSize: "18px",
//     color: colors.textPrimary,
//   },

//   clientSub: {
//     color: colors.textSecondary,
//     fontSize: "14px",
//   },

//   right: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//   },

//   heroImage: {
//     width: "100%",
//     maxWidth: "720px",
//     objectFit: "contain",
//     filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.08))",
//   },

//   statsWrapper: {
//     position: "relative",
//     zIndex: 3,
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "-30px",
//     marginBottom: "40px",
//   },

//   stats: {
//     background: colors.glass,
//     backdropFilter: "blur(24px)",
//     border: `1px solid ${colors.glassBorder}`,
//     borderRadius: "24px",
//     boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
//     padding: "24px 40px",
//     display: "grid",
//     gridTemplateColumns: "repeat(4,1fr)",
//     gap: "40px",
//     minWidth: "900px",
//   },

//   statItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "14px",
//     color: colors.textPrimary,
//   },

//   statNumber: {
//     fontSize: "20px",
//     fontWeight: 700,
//     color: colors.textPrimary,
//   },

//   statLabel: {
//     fontSize: "13px",
//     color: colors.textMuted,
//   },
// };
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── MOBILE LAYOUT ─────────────────────────────────────────── */
  if (isMobile) {
    return (
      <section style={styles.heroMobile}>

        {/* NOTE: plain <div> — NOT className="container" — avoids global CSS overrides */}
        <div style={styles.containerMobile}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.leftMobile}
          >
            {/* Badge */}
            <div style={styles.badgeMobile}>
              <ShieldCheck size={16} color={colors.danger} />
              <span>Trusted Visa Partner For Your Global Dreams</span>
            </div>

            {/* Heading */}
            <h1 style={styles.headingMobile}>
              Your Journey.
              <br />
              Our Expertise.
              <br />
              <span style={styles.redText}>Global Opportunities.</span>
            </h1>

            {/* Subtitle */}
            <p style={styles.subtitleMobile}>
              Expert guidance for Study, Work, Visit & PR Visas.
              <br />
              Turning your international dreams into reality.
            </p>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={styles.heroImageWrapperMobile}
            >
              <img src={heroIcon.src} alt="" style={styles.heroImageMobile} />
            </motion.div>

            {/* Buttons */}
            <div style={styles.buttonsMobile}>
              <Button href="/contact" size="lg">
                Book Free Consultation
              </Button>
              <Button href="/countries" variant="outline" size="lg">
                Explore Countries
              </Button>
            </div>

            {/* Happy clients */}
            <div style={styles.clientsMobile}>
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
                <div style={styles.clientTitle}>25,000+ Happy Clients</div>
                <div style={styles.clientSub}>Across 20+ Countries</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <div style={styles.statsWrapperMobile}>
          <div style={styles.statsMobile}>
            <div style={styles.statItem}>
              <Users size={22} color={colors.danger} />
              <div>
                <h4 style={styles.statH4}>25,000+</h4>
                <p style={styles.statP}>Happy Clients</p>
              </div>
            </div>
            <div style={styles.statItem}>
              <Globe size={22} color={colors.primary} />
              <div>
                <h4 style={styles.statH4}>20+</h4>
                <p style={styles.statP}>Countries</p>
              </div>
            </div>
            <div style={styles.statItem}>
              <FileText size={22} color={colors.danger} />
              <div>
                <h4 style={styles.statH4}>35,000+</h4>
                <p style={styles.statP}>Visas Processed</p>
              </div>
            </div>
            <div style={styles.statItem}>
              <ThumbsUp size={22} color={colors.success} />
              <div>
                <h4 style={styles.statH4}>98%</h4>
                <p style={styles.statP}>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ── DESKTOP / TABLET LAYOUT (100% unchanged) ────────────── */
  return (
    <section style={styles.hero}>
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
            <ShieldCheck size={16} color={colors.danger} />
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
            <Button href="/countries" variant="outline" size="lg">
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
              <div style={styles.clientTitle}>25,000+ Happy Clients</div>
              <div style={styles.clientSub}>Across 20+ Countries</div>
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
          <img src={heroIcon.src} alt="" style={styles.heroImage} />
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
  /* ─── HERO ──────────────────────────────────────────────── */
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

  /* ─── HERO MOBILE (no background image) ────────────────── */
  heroMobile: {
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  /* ─── BG OVERLAY ─────────────────────────────────────────── */
  bgOverlay: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(
      90deg,
      rgba(255,255,255,0.96) 0%,
      rgba(255,255,255,0.85) 45%,
      rgba(255,255,255,0.30) 100%
    )`,
    zIndex: 1,
  },
  bgOverlayMobile: {
    position: "absolute",
    inset: 0,
    background: "rgba(255,255,255,0.92)",
    zIndex: 1,
  },

  /* ─── CONTAINER ──────────────────────────────────────────── */
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
  // No className="container" on mobile — full manual control
  containerMobile: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "100px",
    paddingBottom: "32px",
    paddingLeft: "20px",
    paddingRight: "20px",
    margin: 0,         // kill any auto margins from global .container
    maxWidth: "100%",  // kill any max-width from global .container
  },

  /* ─── LEFT ───────────────────────────────────────────────── */
  left: {
    maxWidth: "620px",
  },
  leftMobile: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",   // horizontally center children
    textAlign: "center",    // center inline text
  },

  /* ─── BADGE ──────────────────────────────────────────────── */
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
  badgeMobile: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    background: colors.glass,
    border: `1px solid ${colors.glassBorder}`,
    padding: "8px 14px",
    borderRadius: "999px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    color: colors.primary,
    fontWeight: 600,
    fontSize: "11px",
    marginBottom: "20px",
    textAlign: "center",
    maxWidth: "90%",
 
  },

  /* ─── HEADING ────────────────────────────────────────────── */
  heading: {
    fontSize: "clamp(3rem, 4vw, 4.5rem)",
    lineHeight: 1.05,
    fontWeight: 700,
    letterSpacing: "-2px",
    marginBottom: "24px",
    color: colors.textPrimary,
    fontFamily: '"Playfair Display", serif',
  },
  headingMobile: {
    fontSize: "clamp(2rem, 8vw, 2.6rem)",
    lineHeight: 1.12,
    fontWeight: 700,
    letterSpacing: "-1px",
    marginBottom: "16px",
    color: colors.textPrimary,
    fontFamily: '"Playfair Display", serif',
    textAlign: "center",
    width: "100%",
  },

  redText: {
    color: colors.danger,
    whiteSpace: "nowrap",
    display: "inline-block",
  },

  /* ─── SUBTITLE ───────────────────────────────────────────── */
  subtitle: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: colors.textSecondary,
    marginBottom: "40px",
  },
  subtitleMobile: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: colors.textSecondary,
    marginBottom: "20px",
    textAlign: "center",
    width: "100%",
  },

  /* ─── HERO IMAGE (mobile only) ───────────────────────────── */
  heroImageWrapperMobile: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "24px",
  },
  heroImageMobile: {
    width: "85%",
    maxWidth: "300px",
    objectFit: "contain",
    filter: "drop-shadow(0 20px 36px rgba(0,0,0,0.10))",
  },

  /* ─── BUTTONS ────────────────────────────────────────────── */
  buttons: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
    marginBottom: "42px",
  },
  buttonsMobile: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "28px",
    width: "100%",
    alignItems: "center",
  },

  /* ─── CLIENTS ────────────────────────────────────────────── */
  clients: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
  clientsMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "18px",
    width: "100%",
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

  /* ─── RIGHT (desktop/tablet only) ───────────────────────── */
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

  /* ─── STATS WRAPPER ──────────────────────────────────────── */
  statsWrapper: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    marginTop: "-30px",
    marginBottom: "40px",
  },
  statsWrapperMobile: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    marginTop: "8px",
    marginBottom: "28px",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "100%",
    boxSizing: "border-box",
  },

  /* ─── STATS GRID ──────────────────────────────────────────── */
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
  statsMobile: {
    background: colors.glass,
    backdropFilter: "blur(24px)",
    border: `1px solid ${colors.glassBorder}`,
    borderRadius: "20px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.07)",
    padding: "20px 16px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    width: "100%",
    boxSizing: "border-box",
  },

  /* ─── STAT ITEM ───────────────────────────────────────────── */
  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: colors.textPrimary,
  },

  statH4: {
    fontSize: "16px",
    fontWeight: 700,
    color: colors.textPrimary,
    margin: 0,
  },

  statP: {
    fontSize: "11px",
    color: colors.textMuted,
    margin: 0,
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