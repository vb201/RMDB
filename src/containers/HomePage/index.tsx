import React, { useState } from "react";
import Navbar from "../../components/navbar";
import SeachBar from "../../components/SearchBar";
import { useHomeFetch } from "../../hooks/useHomeFetch";
import { PageContainer } from "./styles";

const HomePage = () => {
	// const [searchTerm, setSearchTerm] = useState('')
	const {
		bannerState,
		loading,
		error,
		searchTerm,
		setSearchTerm,
		setLoadingMore,
	} = useHomeFetch();
	console.log(bannerState);

	const sliced = Object.fromEntries(
		Object.entries(bannerState.results).slice(0, 6)
	);

	console.log(sliced);

	return (
		<PageContainer>
			<Navbar>
				<SeachBar setSearchTerm={setSearchTerm} />
			</Navbar>
		</PageContainer>
	);
};

export default HomePage;
