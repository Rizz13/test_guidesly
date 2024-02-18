import type { Metadata } from 'next'
import { ConfigProvider } from 'antd';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import { Montserrat } from 'next/font/google'
import './globals.css'
import { TripProvider } from '@/store/store';

const montserrat = Montserrat({
  weight: ['500', '600'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Trip Booking",
  description: "Top Famous places are available."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: montserrat.style.fontFamily,
                colorPrimary: '#303030',
              },
              components:{
                Typography:{
                  titleMarginBottom: 0
                }
              }
            }}
          >
            <TripProvider>
              {children}
            </TripProvider>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
