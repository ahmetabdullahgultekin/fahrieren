import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {initGA, logPageView} from './gaUtils';

const GoogleAnalytics: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        initGA();
    }, []);

    useEffect(() => {
        logPageView(location.pathname + location.search);
    }, [location]);

    return null;
};

export default GoogleAnalytics;
