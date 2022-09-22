import Head from 'next/head'
import styles from '../styles/layout.module.css'

const Layout = ({title, keywords, description, children}) => {
  return (
	<div>
		<Head>
			<title>{title}</title>
			<meta name="description" content={description}/>
			<meta name="keywords" content={keywords}/>
		</Head>
		<div className={styles.container}>
			{children}
		</div>
	</div>
  )
}

Layout.defaultProps = {
	title: 'Coding Events | Find the latest coding events',
	description: 'Find the latest coding events',
	keywords: 'code, coding, events, programming'
}

export default Layout