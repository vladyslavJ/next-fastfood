import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Black and White',
	description:
		'Black and White Fastfood offers a modern twist on classic fast food, featuring a menu of delicious burgers, fries, and drinks in a sleek, minimalist setting. Known for quick service and high-quality ingredients, it’s the perfect spot for a tasty, fast meal.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<main className="min-h-screen">{children}</main>
			</body>
		</html>
	);
}
