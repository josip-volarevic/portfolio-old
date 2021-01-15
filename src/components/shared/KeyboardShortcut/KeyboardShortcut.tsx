import { KeyboardShortcutType } from 'constants/KeyboardShortcutTypes'
import React from 'react'
import './index.css'

const KeyboardShortcut: React.FC<KeyboardShortcutType> = ({ command, keybinding }) => {
	const keys = keybinding.split('+')
	return (
		<dl>
			<dt>{command}</dt>
			<dd>
				<div className="keyboard-shortcut">
					{keys.map((key, index) => (
						<React.Fragment key={key}>
							<span className="keyboard-shortcut-key">{key}</span>
							{index !== keys.length - 1 && <span className="keyboard-shortcut-separator">+</span>}
						</React.Fragment>
					))}
				</div>
			</dd>
		</dl>
	)
}

export default KeyboardShortcut
