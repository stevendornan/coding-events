import Head from 'next/head'
import styles from '@/styles/layout.module.css'
import Header from './Header'
import Footer from './Footer'

const Layout = ({title, keywords, description, children}) => {
  return (
	<div>
		<Head>
			<title>{title}</title>
			<meta name="description" content={description}/>
			<meta name="keywords" content={keywords}/>
		</Head>
		<Header/>
		<div className={styles.container}>
			{children}
		</div>
		<Footer/>
	</div>
  )
}

Layout.defaultProps = {
	title: 'Coding Jobs | Find the latest coding jobs',
	description: 'Find the latest coding jobs',
	keywords: 'code, coding, jobs, programming'
}

export default Layout