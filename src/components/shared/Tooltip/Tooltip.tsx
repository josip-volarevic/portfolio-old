import React from 'react'
import './index.css'

interface Props {
	className?: string
	title: string
}

const Tooltip: React.FC<Props> = ({ className, title }) => {
	return <span className={`tooltip ${className ?? ''}`}>{title}</span>
}

export default Tooltip
