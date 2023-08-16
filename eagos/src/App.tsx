import { useState } from 'react';
import Loading from './Loading';

export default function App() {
	const [isLoading, setLoading] = useState(true);

	return <>{isLoading ? <Loading /> : ''}</>;
}
