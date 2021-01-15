import React from 'react'
import StatusBarItem from 'components/shared/StatusBarItem'
import { statusBarItems } from 'constants/Data'
import './index.css'

const StatusBar: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({
	className,
	...props
}) => {
	return (
		<footer {...props} className={`status-bar ${className ?? ''}`}>
			{statusBarItems.map((statusBarItem) => (
				<StatusBarItem key={statusBarItem.tooltip} {...statusBarItem} />
			))}
		</footer>
	)
}

export default StatusBar
