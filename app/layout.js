import './globals.css'

export const metadata = {
  title: 'Phantom Phone Store - Premium iPhones & Samsung',
  description: 'Buy authentic iPhones and Samsung S-series devices with fast delivery in Keffi, Nasarawa State.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
