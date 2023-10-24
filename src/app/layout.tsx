import type { Metadata } from "next";
import Providers from "~/app/providers";
import Layout from "~/lib/layout";
import { APP_NAME, SITE_URL } from "../../constants";

export const metadata: Metadata = {
  title: APP_NAME + " | #1 Auction Site",
  description: "Online auction site 🛒 built with Next.js ⚛️, ChakraUI 💅",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#FFFFFF",
  openGraph: {
    url: SITE_URL,
    title: APP_NAME,
    description: "Next.js + chakra-ui + TypeScript template",
  },
};
type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
