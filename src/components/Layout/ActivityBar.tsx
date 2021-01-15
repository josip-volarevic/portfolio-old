import React from 'react'
import ActivityBarItem from 'components/shared/ActivityBarItem'
import 'index.css'
import { activityBarItems } from 'constants/Data'

const ActivityBar: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({
	className,
	...props
}) => {
	return (
		<aside {...props} className={`activity-bar ${className ?? ''}`}>
			<ul className="activity-bar-list flex-column">
				{activityBarItems.map((activityBarItem) => (
					<ActivityBarItem key={activityBarItem.tooltip} {...activityBarItem} />
				))}
			</ul>
		</aside>
	)
}

export default ActivityBar
