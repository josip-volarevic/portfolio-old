import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
import { Route } from 'constants/EditorRoutes'
import './index.css'

const MarkdownFileTitle: React.FC<
	Route & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ path, title, className, ...props }) => {
	return (
		<div {...props} className={`markdown-file ${className ?? ''}`}>
			<NavLink to={path} className="markdown-file-link" activeClassName="markdown-file-link--active">
				<FontAwesomeIcon icon={faMarkdown} className="markdown-file-icon" />
				<span className="markdown-file-title">{title}</span>
			</NavLink>
		</div>
	)
}

export default MarkdownFileTitle
