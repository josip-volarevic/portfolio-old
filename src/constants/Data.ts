import {
	faCloudUploadAlt,
	faTimesCircle,
	faExclamationTriangle,
	faCodeBranch,
	faBug,
	faSearch,
	faBell,
} from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { KeyboardShortcutType } from './KeyboardShortcutTypes'
import { StatusBarItemType } from './StatusBarTypes'
import { ActivityBarItemType } from './ActivityBarTypes'

export const keyboardShortcuts: Array<KeyboardShortcutType> = [
	{ command: 'Show all commands', keybinding: 'Ctrl+Shift+P' },
	{ command: 'Toggle terminal', keybinding: 'Ctrl+Shift+J' },
	{ command: 'Find on website', keybinding: 'Ctrl+Shift+F' },
]

export const activityBarItems: Array<ActivityBarItemType> = [
	{ icon: faCopy, tooltip: 'Dummy item', link: '#' },
	{ icon: faSearch, tooltip: 'Seach (Yet to be implemented)', link: '#' },
	{ icon: faCodeBranch, tooltip: 'Source code', link: 'https://github.com/Volki312/portfolio' },
	{ icon: faBug, tooltip: 'Project issues', link: 'https://github.com/Volki312/portfolio/issues' },
	{ icon: faGithub, tooltip: 'My GitHub', link: 'https://github.com/Volki312' },
	{ icon: faLinkedin, tooltip: 'My LinkedIn', link: 'https://www.linkedin.com/in/josip-volarevic/' },
]

export const statusBarItems: Array<StatusBarItemType> = [
	{
		icon: faCodeBranch,
		tooltip: 'master branch active',
		text: 'master*-',
	},
	{
		icon: faCloudUploadAlt,
		tooltip: 'Cute cloud icon',
	},
	{
		icon: faTimesCircle,
		tooltip: 'No errors',
		text: '0',
	},
	{
		icon: faExclamationTriangle,
		tooltip: 'No warrings',
		text: '0',
	},
	{
		tooltip: 'UTF-8 econding',
		text: 'UTF-8',
		pushRight: true,
	},
	{
		tooltip: 'CRLF end of line sequence',
		text: 'CRLF',
	},
	{
		tooltip: 'TypeScript React language mode',
		text: 'TypeScript React',
		reverseTooltip: true,
	},
	{
		icon: faBell,
		tooltip: 'No new notifications',
		reverseTooltip: true,
	},
]
