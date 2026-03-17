export const metadata = {
  title: "Jobayer Hossan | WordPress & WooCommerce Developer",
  description:
    "Professional WordPress and WooCommerce development services by Jobayer Hossan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}