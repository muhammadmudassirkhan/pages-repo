import Link from "next/link";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;}>) {
  return (
    <html lang="en"> 
      
      <body>

        <div>
           <li><Link href="/">Home </Link></li>
        <li><Link href="/about">About</Link></li>
         <li><Link href="/contact">Contact</Link></li>

        <li><Link href="/services">Services</Link></li>

         </div>
         {children}
        
       </body>
    </html>
  );
}
