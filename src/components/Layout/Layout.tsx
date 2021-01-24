import React from 'react'
import { useLocation } from 'react-router-dom'
import Column from 'components/shared/Flex/Column'
import Row from 'components/shared/Flex/Row'
import EditorGroups from './EditorGroups'
import ActivityBar from './ActivityBar'
import Panel from './Panel'
import SideBar from './SideBar'
import StatusBar from './StatusBar'

// https://code.visualstudio.com/docs/getstarted/userinterface
const Layout: React.FC = ({ children }) => {
	const { pathname: location } = useLocation()

	return (
		<>
			<Row style={{ height: 'calc(100% - 22px)' }}>
				<Column style={{ width: 50 }} component={ActivityBar} />

				<Column style={{ width: 210 }} component={SideBar} />

				<Column style={{ width: 'calc(100% - 260px)' }}>
					{location !== '/' && <Row style={{ height: 35 }} component={EditorGroups} />}
					<Row
						style={{
							height: location === '/' ? 'calc(100% - 300px)' : 'calc(100% - 335px)',
							position: 'relative',
							paddingTop: 10,
							backgroundColor: '#141414',
						}}
						as="main"
					>
						{children}
					</Row>
					<Row style={{ height: 300 }} component={Panel} />
				</Column>
			</Row>

			<Row style={{ height: 22 }} component={StatusBar} />
		</>
	)
}

export default Layout
