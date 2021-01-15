import React from 'react'
import MarkdownFileTitle from 'components/shared/MarkdownFileTitle'
import EditorRoutes from 'constants/EditorRoutes'
import { useHistory, useLocation } from 'react-router-dom'
import 'index.css'

const EditorGroups: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
	className,
	...props
}) => {
	const { pathname: location } = useLocation()
	const history = useHistory()

	const closeFile = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.preventDefault()
		history.replace('/')
	}

	return (
		<div {...props} className={`editor-groups ${className ?? ''}`}>
			<MarkdownFileTitle
				onAuxClick={closeFile}
				title={EditorRoutes.find((route) => route.path === location)?.title || 'unknown'}
				path={location}
			/>
		</div>
	)
}

export default EditorGroups
