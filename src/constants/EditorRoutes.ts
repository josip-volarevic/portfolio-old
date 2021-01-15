import PROJECTS from 'pages/PROJECTS.md'
import ABOUT_ME from 'pages/ABOUT_ME.md'
import WORK_EXPERIENCE from 'pages/WORK_EXPERIENCE.md'
import SKILLS from 'pages/SKILLS.md'
import EDUCATION from 'pages/EDUCATION.md'
import HOBBIES from 'pages/HOBBIES.md'
import PAGE_NOT_FOUND from 'pages/PAGE_NOT_FOUND.md'

export interface Route {
	path: string
	title: string
}

export interface EditorRoute extends Route {
	file: string
}

export const EditorRoutes: Array<EditorRoute> = [
	{ path: '/about-me', file: ABOUT_ME, title: 'ABOUT_ME.md' },
	{ path: '/education', file: EDUCATION, title: 'EDUCATION.md' },
	{ path: '/hobbies', file: HOBBIES, title: 'HOBBIES.md' },
	{ path: '/page-not-found', file: PAGE_NOT_FOUND, title: 'PAGE_NOT_FOUND.md' },
	{ path: '/projects', file: PROJECTS, title: 'PROJECTS.md' },
	{ path: '/skills', file: SKILLS, title: 'SKILLS.md' },
	{ path: '/work-experience', file: WORK_EXPERIENCE, title: 'WORK_EXPERIENCE.md' },
]

export default EditorRoutes
