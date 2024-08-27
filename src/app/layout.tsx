import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Kanban-Web",
	description: "A modern kanban for workflow automation",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

