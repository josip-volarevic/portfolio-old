import React from 'react'
import SideBarFolder from 'components/shared/SideBarFolder'
import './index.css'

const SideBar: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({
	className,
	...props
}) => {
	return (
		<header {...props} className={`side-bar ${className ?? ''}`}>
			<p className="side-bar-title">EXPLORER</p>
			<SideBarFolder />
		</header>
	)
}

export default SideBar
