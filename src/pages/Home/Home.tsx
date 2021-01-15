import React from 'react'
import Instructions from 'components/shared/Instructions'
import './index.css'

const Home: React.FC = () => {
	return (
		<div className="homepage">
			<div className="homepage-background" />
			<Instructions />
		</div>
	)
}

export default Home
