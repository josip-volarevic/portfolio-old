import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faFolderOpen, faFolder } from '@fortawesome/free-solid-svg-icons'
import EditorRoutes from 'constants/EditorRoutes'
import MarkdownFileTitle from 'components/shared/MarkdownFileTitle'
import { useHistory } from 'react-router-dom'
import './index.css'

const SideBarFolder: React.FC = () => {
	const [isFolderOpened, setIsFolderOpened] = useState<boolean>(true)
	const toggleFolder = () => setIsFolderOpened(!isFolderOpened)
	const history = useHistory()

	const openFile = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, path: string) => {
		event.preventDefault()
		history.replace(path)
	}

	return (
		<nav className="folder">
			<button type="button" className="folder-button" onClick={toggleFolder}>
				<FontAwesomeIcon
					icon={isFolderOpened ? faAngleDown : faAngleRight}
					className="folder-icon folder-icon--caret"
				/>
				<FontAwesomeIcon icon={isFolderOpened ? faFolderOpen : faFolder} className="folder-icon folder-icon--folder" />
				<span className="folder-title">portfolio</span>
			</button>
			{isFolderOpened &&
				EditorRoutes.map((route) => {
					const { path, title } = route
					return <MarkdownFileTitle onAuxClick={(e) => openFile(e, path)} key={path} path={path} title={title} />
				})}
		</nav>
	)
}

export default SideBarFolder
