import React, { FunctionComponent, ReactHTML } from 'react'
import './index.css'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	as?: keyof ReactHTML
	component?: FunctionComponent
	className?: string
}

const Row: React.FC<Props> = ({ as, component: Component, className, children, ...rest }) => {
	return Component ? (
		<Component {...{ className: `flex-row ${className ?? ''}`, ...rest }}>{children}</Component>
	) : (
		React.createElement(as || 'div', { className: `flex-row ${className ?? ''}`, ...rest }, children)
	)
}

export default Row
