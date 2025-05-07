import Header from '@/components/shared/header';
import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <div className='flex h-screen flex-col'>
    <div className='flex h-screen flex-col'>
      <Header />
      {/* <main className='flex-1 wrapper'>{children}</main> */}
      <main className=''>{children}</main>
      <Footer />
    </div>
  );
}
