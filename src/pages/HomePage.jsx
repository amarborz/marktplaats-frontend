import React from 'react'

import MainCarousel from '../components/MainCarousel/MainCarousel'
import HomeCategories from '../components/HomeCategories/HomeCategories'
import HomeProducts from '../components/HomeProducts/HomeProducts'

const HomePage = () => {
	return (
		<div>
			<MainCarousel />
			<HomeProducts />
			<HomeCategories />
		</div>
	)
}

export default HomePage
