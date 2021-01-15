import axios from 'axios'
import EditorRoutes from 'constants/EditorRoutes'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

interface Command {
	description?: string
	usage?: string
	fn: (...args: string[]) => string | Promise<string>
}

type Commands = Record<string, Command>

const useTerminal = (): [Commands, string, number, React.Dispatch<React.SetStateAction<number>>] => {
	const [terminalHeight, setTerminalHeight] = useState<number>(0)
	const { pathname: location } = useLocation()
	const [terminalPath, setTerminalPath] = useState<string>(`root@DESKTOP ~${location !== '/' ? location : ''} $`)
	const history = useHistory()

	useEffect(() => {
		setTerminalPath(`root@DESKTOP ~${location !== '/' ? location : ''} $`)
	}, [location])

	const commands: Commands = {
		echo: {
			description: 'Echo a passed string.',
			fn(...inputs: string[]) {
				setTerminalHeight(terminalHeight + 1)
				return inputs.join(' ')
			},
		},
		ls: {
			description: 'List information about the routes.',
			fn() {
				setTerminalHeight(terminalHeight + 1)
				if (location !== '/') return ''
				return EditorRoutes.reduce((acc, route, index) => (index ? `${acc} ${route.path}` : route.path), '')
			},
		},
		cd: {
			description: 'Change the shell working directory.',
			fn(path?: string): string {
				setTerminalHeight(terminalHeight + 1)
				if (!path) return ''
				if (path.startsWith('~/')) {
					const slicedPath = path.slice(1)
					if (EditorRoutes.find((route) => route.path === slicedPath)) {
						history.replace(slicedPath)
						return ''
					}
				}
				if (location === '/') {
					if (path === '..' || path === '~') return ''
					const validSubdirectoryRegex = new RegExp(`${path}|\\/${path}|\\.\\/${path}`, 'gi')
					if (EditorRoutes.find((route) => validSubdirectoryRegex.test(route.path))) {
						history.replace(path)
						return ''
					}
					return `${path}: No such file or directory`
				}
				if (path !== '..' && path !== '~') return `${path}: No such file or directory`
				history.replace('/')
				return ''
			},
		},
		joke: {
			description: 'Hits you up with a random joke.',
			async fn() {
				setTerminalHeight(terminalHeight + 2)
				try {
					const response = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
					const joke = response.data[0]
					return `${joke.setup}\n${joke.punchline}`
				} catch (e) {
					return "Couldn't reach our joke servers. Try this command some other time!"
				}
			},
		},
		ip: {
			description: 'Check your ip address.',
			fn() {
				setTerminalHeight(terminalHeight + 1)
				return 'I bet your ip address is 127.0.0.1 🙃'
			},
		},
		whoami: {
			description: 'Print the user name associated with the current effective user ID.',
			fn() {
				setTerminalHeight(terminalHeight + 1)
				return "I don't know who you are, but I sure hope your job title starts with 'IT' and ends with 'recruiter' 😎"
			},
		},
		whoareyou: {
			description: 'Print Josips basic info.',
			fn() {
				setTerminalHeight(terminalHeight + 1)
				return 'Proud husband and a father, IT student and a full time software engineer 👪💻'
			},
		},
	}

	return [commands, terminalPath, terminalHeight, setTerminalHeight]
}

export default useTerminal
