import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import router from './routes/routes.tsx';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store.ts';
import {PersistGate} from 'redux-persist/integration/react';
import {Toaster} from 'sonner';
import DeviceDetector from './components/DeviceDetector/DeviceDetector.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={router} />
				<DeviceDetector />
			</PersistGate>
		</Provider>
		<Toaster />
	</React.StrictMode>,
);
