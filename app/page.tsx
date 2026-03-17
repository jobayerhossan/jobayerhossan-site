export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: "40px 20px",
      }}
    >
      <section
        style={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "50px 30px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          Jobayer Hossan
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          WordPress and WooCommerce Developer helping businesses build clean,
          fast, and professional websites.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#"
            style={{
              backgroundColor: "#111",
              color: "#fff",
              padding: "14px 22px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            View Portfolio
          </a>

          <a
            href="#"
            style={{
              border: "1px solid #111",
              color: "#111",
              padding: "14px 22px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}