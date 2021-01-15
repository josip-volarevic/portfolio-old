import React from 'react'
import './index.css'

interface Props {
	className?: string
}

const TooltipWrapper: React.FC<Props> = ({ className, children }) => {
	return <div className={`tooltip-wrapper ${className ?? ''}`}>{children}</div>
}

export default TooltipWrapper
