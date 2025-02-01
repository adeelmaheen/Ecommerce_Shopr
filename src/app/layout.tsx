export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
         
          {children}
        </body>
      </html>
    )
  }

  // pages/_app.tsx or app/layout.tsx (if using App Router)
// import type { AppProps } from 'next/app'
// import { WishlistProvider } from '@/context/WishlistContext'

// export function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <WishlistProvider>
//       <Component {...pageProps} />
//     </WishlistProvider>
//   )
// }

