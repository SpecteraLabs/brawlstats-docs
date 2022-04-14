import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHeader from '../components/HomepageHeader';

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	useEffect(() => {
		console.log('%cHold Up!', `color: #23529B; font-size: 72px; font-weight: bold; -webkit-text-stroke: 2px #23529B`);
		console.log(
			[
				'%cIf someone told you to copy/paste something here,',
				'it is likely that you are being tricked and/or scammed.',
				'For more information check out\n\nhttps://en.wikipedia.org/wiki/Self-XSS'
			].join(' '),
			'font-size: 16px;'
		);
		console.log(
			[
				'%cWhile we do everything in our power to ensure your security,',
				'pasting anything in here could give attackers access to your private information!'
			].join(' '),
			'font-size: 18px; font-weight: bold; color: red;'
		);
		console.log(
			'%cIf you do understand exactly what you are doing, you should join the Sapphire Development team https://sapphirejs.dev/discord',
			'font-size: 16px;'
		);
	}, []);
	return (
		<>
			<Layout title="Home" description={siteConfig.tagline}>
				<HomepageHeader />
			</Layout>
		</>
	);
}
