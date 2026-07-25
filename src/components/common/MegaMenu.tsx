// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import type { NavMenuConfig } from "@/constants/navigation";
// import styles from "./MegaMenu.module.css";

// type MegaMenuProps = {
//   menu: NavMenuConfig;
//   isOpen: boolean;
//   onOpen: () => void;
//   onClose: () => void;
//   mobile?: boolean;
//   mobileExpanded?: boolean;
//   onMobileToggle?: () => void;
// };

// export default function MegaMenu({
//   menu,
//   isOpen,
//   onOpen,
//   onClose,
//   mobile,
//   mobileExpanded,
//   onMobileToggle,
// }: MegaMenuProps) {
//   const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const handleEnter = () => {
//     if (mobile) return;
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     onOpen();
//   };

//   const handleLeave = () => {
//     if (mobile) return;
//     timeoutRef.current = setTimeout(onClose, 150);
//   };

//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   if (mobile) {
//     return (
//       <div className={styles.mobileItem}>
//         <button
//           type="button"
//           className={styles.mobileTrigger}
//           onClick={onMobileToggle}
//           aria-expanded={mobileExpanded}
//         >
//           {menu.label}
//           <ChevronDown
//             size={16}
//             className={`${styles.chevron} ${mobileExpanded ? styles.chevronOpen : ""}`}
//           />
//         </button>
//         <AnimatePresence>
//           {mobileExpanded && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.25 }}
//               className={styles.mobilePanel}
//             >
//               {menu.columns.map((col) => (
//                 <div key={col.title} className={styles.mobileColumn}>
//                   <span className={styles.columnTitle}>{col.title}</span>
//                   {col.items.map((item) => {
//                     const Icon = item.icon;
//                     return (
//                       <Link
//                         key={item.href}
//                         href={item.href}
//                         className={styles.mobileLink}
//                       >
//                         <Icon size={16} aria-hidden="true" />
//                         {item.label}
//                       </Link>
//                     );
//                   })}
//                 </div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     );
//   }

//   return (
//     <div
//       className={styles.wrapper}
//       onMouseEnter={handleEnter}
//       onMouseLeave={handleLeave}
//     >
//      <button
//   type="button"
//   className={`${styles.trigger} ${isOpen ? styles.triggerActive : ""}`}
//   onMouseEnter={handleEnter}
// >
//   {menu.label}

//   <ChevronDown
//     size={14}
//     className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
//   />
// </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 8 }}
//             transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
//             className={styles.dropdown}
//             onMouseEnter={handleEnter}
//             onMouseLeave={handleLeave}
//           >
//             <div className={styles.dropdownInner}>
//               {menu.columns.map((col) => (
//                 <div key={col.title} className={styles.column}>
//                   <span className={styles.columnTitle}>{col.title}</span>
//                   <ul className={styles.list}>
//                     {col.items.map((item) => {
//                       const Icon = item.icon;
//                       return (
//                         <li key={item.href}>
//                           <Link href={item.href} className={styles.link}>
//                             <span className={styles.linkIcon}>
//                               <Icon size={16} aria-hidden="true" />
//                             </span>
//                             <span className={styles.linkText}>{item.label}</span>
//                           </Link>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { NavMenuConfig } from "@/constants/navigation";
import styles from "./MegaMenu.module.css";

type MegaMenuProps = {
  menu: NavMenuConfig;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  mobile?: boolean;
  mobileExpanded?: boolean;
  onMobileToggle?: () => void;
};

// Aa function exact match no issue solve karse (foolproof mapping)
const getFlagCode = (countryName: string) => {
  const name = countryName.toLowerCase().trim();
  if (name.includes("uk") || name.includes("united kingdom")) return "gb";
  if (name.includes("germany")) return "de";
  if (name.includes("france")) return "fr";
  if (name.includes("ireland")) return "ie";
  if (name.includes("netherlands")) return "nl";
  if (name.includes("sweden")) return "se";
  if (name.includes("canada")) return "ca";
  if (name.includes("usa") || name.includes("america")) return "us";
  if (name.includes("australia")) return "au";
  if (name.includes("new zealand")) return "nz";
  if (name.includes("singapore")) return "sg";
  if (name.includes("dubai") || name.includes("uae")) return "ae";
  return null;
};

export default function MegaMenu({
  menu,
  isOpen,
  onOpen,
  onClose,
  mobile,
  mobileExpanded,
  onMobileToggle,
}: MegaMenuProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (mobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    onOpen();
  };

  const handleLeave = () => {
    if (mobile) return;
    timeoutRef.current = setTimeout(onClose, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (mobile) {
    return (
      <div className={styles.mobileItem}>
        <button
          type="button"
          className={styles.mobileTrigger}
          onClick={onMobileToggle}
          aria-expanded={mobileExpanded}
        >
          {menu.label}
          <ChevronDown
            size={16}
            className={`${styles.chevron} ${mobileExpanded ? styles.chevronOpen : ""}`}
          />
        </button>
        <AnimatePresence>
          {mobileExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={styles.mobilePanel}
            >
              {/* MOBILE MATE: Countries menu */}
              {menu.label === "Countries" ? (
                <div className={styles.mobileColumn}>
                  {menu.columns.flatMap(col => col.items).map((item) => {
                    const Icon = item.icon;
                    const flagCode = getFlagCode(item.label);
                    
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.mobileLink}
                        style={{ display: "flex", alignItems: "center", gap: "10px" }}
                      >
                        {flagCode ? (
                          <img
                            src={`https://flagcdn.com/w40/${flagCode}.png`}
                            alt={`${item.label} flag`}
                            style={{ width: "20px", height: "14px", objectFit: "cover", borderRadius: "2px", display: "inline-block" }}
                          />
                        ) : (
                          <Icon size={16} aria-hidden="true" />
                        )}
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                // NORMAL MENUS MATE
                menu.columns.map((col) => (
                  <div key={col.title} className={styles.mobileColumn}>
                    <span className={styles.columnTitle}>{col.title}</span>
                    {col.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={styles.mobileLink}
                        >
                          <Icon size={16} aria-hidden="true" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        className={`${styles.trigger} ${isOpen ? styles.triggerActive : ""}`}
        onMouseEnter={handleEnter}
      >
        {menu.label}

        <ChevronDown
          size={14}
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={styles.dropdown}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <div className={styles.dropdownInner}>
              
              {/* DESKTOP MATE: Countries menu */}
              {menu.label === "Countries" ? (
                <div className={styles.column} style={{ width: '100%' }}>
                  <ul 
                    className={styles.list}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)', // 3 Columns
                      gridTemplateRows: 'repeat(4, auto)',   // 4 Items per column
                      gridAutoFlow: 'column',                // Top-to-bottom
                      columnGap: '48px',
                      rowGap: '16px'
                    }}
                  >
                    {menu.columns.flatMap(col => col.items).map((item) => {
                      const Icon = item.icon;
                      const flagCode = getFlagCode(item.label);
                      
                      return (
                        <li key={item.href}>
                          <Link href={item.href} className={styles.link}>
                            <span className={styles.linkIcon} style={{ display: "flex", alignItems: "center" }}>
                              {flagCode ? (
                                <img
                                  src={`https://flagcdn.com/w40/${flagCode}.png`}
                                  alt={`${item.label} flag`}
                                  style={{ 
                                    width: "20px", 
                                    height: "15px", 
                                    objectFit: "cover", 
                                    borderRadius: "3px", 
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                    display: "inline-block"
                                  }}
                                />
                              ) : (
                                <Icon size={16} aria-hidden="true" />
                              )}
                            </span>
                            <span className={styles.linkText}>{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                // NORMAL MENUS MATE
                menu.columns.map((col) => (
                  <div key={col.title} className={styles.column}>
                    <span className={styles.columnTitle}>{col.title}</span>
                    <ul className={styles.list}>
                      {col.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.href}>
                            <Link href={item.href} className={styles.link}>
                              <span className={styles.linkIcon}>
                                <Icon size={16} aria-hidden="true" />
                              </span>
                              <span className={styles.linkText}>{item.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}