import React from 'react'
import KeyboardShortcut from 'components/shared/KeyboardShortcut'
import { keyboardShortcuts } from 'constants/Data'
import './index.css'

const Instructions: React.FC = () => {
	return (
		<div className="instructions">
			<div className="instructions-box">
				{keyboardShortcuts.map((keyboardShortcut) => (
					<KeyboardShortcut {...keyboardShortcut} key={keyboardShortcut.keybinding} />
				))}
			</div>
		</div>
	)
}

export default Instructions
