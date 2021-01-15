import React from 'react'
import Column from 'components/shared/Flex/Column'
import Row from 'components/shared/Flex/Row'
import { StatusBarItemType } from 'constants/StatusBarTypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TooltipWrapper from 'components/shared/Tooltip/TooltipWrapper'
import Tooltip from 'components/shared/Tooltip'
import './index.css'

const StatusBarItem: React.FC<StatusBarItemType> = ({ icon, tooltip, text, reverseTooltip, pushRight }) => {
	return (
		<Column as="div" className={`status-bar-item ${pushRight ? 'ml-auto' : ''}`}>
			<Row component={TooltipWrapper}>
				{icon && <FontAwesomeIcon className="status-bar-icon" icon={icon} />}
				{text && <span className={`status-bar-span ${icon ? 'pr-6' : 'px-6'}`}>{text}</span>}
				<Tooltip title={tooltip} className={reverseTooltip ? 'tooltip--reverse' : ''} />
			</Row>
		</Column>
	)
}

export default StatusBarItem
