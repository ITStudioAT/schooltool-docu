import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function ZoomImage({ src, alt, framed = false }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${styles.thumb} ${framed ? styles.framed : ""}`}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <img
            src={src}
            alt={alt}
            className={styles.full}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={styles.close}
            onClick={() => setOpen(false)}
            aria-label="Schließen"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
