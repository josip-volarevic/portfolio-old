import useTerminal from 'hooks/useTerminal'
import React from 'react'
import Terminal from 'react-console-emulator'

const Panel: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
	className,
	...props
}) => {
	const [commands, terminalPath, terminalHeight, setTerminalHeight] = useTerminal()

	return (
		<div {...props}>
			<Terminal
				autoFocus
				disableOnProcess
				commands={commands}
				promptLabel={terminalPath}
				noAutoScroll={terminalHeight < 5}
				inputStyle={{ width: 'unset' }}
				messageStyle={{ color: '#0BE95D' }}
				promptLabelStyle={{ color: '#F7DE49' }}
				contentStyle={{ boxSizing: 'border-box' }}
				style={{
					borderRadius: 0,
					backgroundColor: '#141414',
					borderTop: '1px solid #414141',
				}}
				commandCallback={(result: { command: string }) => {
					// Programatically focus on a new input element -> needed for browser consistency
					const terminalInput = document.getElementsByName('react-console-emulator__input')[0]
					if (terminalInput) terminalInput.focus()

					if (result.command === 'help') setTerminalHeight(terminalHeight + 6)
					else if (result.command === 'clear') setTerminalHeight(0)
				}}
				welcomeMessage={['Welcome to my portfolio website! 👋', "Type 'help' to get a list of available commands"]}
			/>
		</div>
	)
}

export default Panel
