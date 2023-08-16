import { useEffect, useState } from 'react';
import Loading from './Loading';
import { Desktop } from './components';

export default function App() {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5 * 1000);
	}, []);

	return <>{isLoading ? <Loading /> : <Desktop />}</>;
}
