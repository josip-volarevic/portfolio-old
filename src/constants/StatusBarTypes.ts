import { IconDefinition } from '@fortawesome/free-regular-svg-icons'

export interface StatusBarItemType {
	icon?: IconDefinition
	tooltip: string
	text?: string
	reverseTooltip?: boolean
	pushRight?: boolean
}
