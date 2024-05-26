import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./components/Bootstrapclient";
import "./globals.css";
import ReduxProvider from "../redux/provider";
import 'react-notifications/lib/notifications.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Express",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>

        <BootstrapClient />
      </body>
    </html>
  );
}
