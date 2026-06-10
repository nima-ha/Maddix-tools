import Script from "next/script";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Maddix Tools</h1>
      <p className={styles.desc}>
        IP & Domain Scanner (legacy script port). If you see no UI controls yet,
        the next step is converting the HTML markup into React components.
      </p>

      <Script
        id="scanner-legacy"
        src="/tmp/scanner/scanner-script-0.html"
        strategy="afterInteractive"
      />

      <div className={styles.note}>
        Legacy script expects specific DOM structure (IDs/classes) that will be
        recreated in the next migration pass.
      </div>

      <div style={{ marginTop: 12, fontSize: 12, opacity: 0.7 }}>
        Loaded legacy scanner script: <code>scanner-script-0.html</code>
      </div>
    </div>
  );
}

