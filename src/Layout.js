import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Preloader from "./components/Loader/Preloader";
import NavBar from "./components/NavBar";

const Layout = () => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const delay = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 10);
		};
		delay();
	}, []);
	return isLoading ? (
		<Preloader />
	) : (
		<div>
			<NavBar />
			<main className="mt-[80px]">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
