import React from 'react'
import './index.css'
import { ActivityBarItemType } from 'constants/ActivityBarTypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tooltip from 'components/shared/Tooltip'
import TooltipWrapper from 'components/shared/Tooltip/TooltipWrapper'

const ActivityBarItem: React.FC<ActivityBarItemType> = ({ icon, tooltip, link }) => {
	return (
		<li className="activity-bar-item">
			<TooltipWrapper>
				<a href={link} className="activity-bar-link">
					<FontAwesomeIcon className="activity-bar-icon" icon={icon} />
					<Tooltip title={tooltip} />
				</a>
			</TooltipWrapper>
		</li>
	)
}

export default ActivityBarItem
