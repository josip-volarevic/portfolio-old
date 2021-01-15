import React, { useState, useEffect, useCallback } from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/theme-twilight'
import 'ace-builds/src-noconflict/mode-markdown'
import { EditorRoute } from 'constants/EditorRoutes'
import useIsMounted from 'hooks/useIsMounted'
import axios from 'axios'

const Editor: React.FC<EditorRoute> = ({ file }) => {
	const [markdownText, setMarkdownText] = useState<string>('')
	const isMounted = useIsMounted()

	const fetchMarkdownFileContent = useCallback(async () => {
		const { data: text } = await axios(file)
		if (isMounted()) {
			setMarkdownText(text)
		}
	}, [file, isMounted])

	useEffect(() => {
		fetchMarkdownFileContent()
	}, [fetchMarkdownFileContent])

	return (
		<AceEditor
			mode="markdown"
			theme="twilight"
			fontSize={14}
			showPrintMargin={false}
			tabSize={2}
			value={markdownText}
			style={{ width: '100%', height: '100%' }}
		/>
	)
}

export default Editor
