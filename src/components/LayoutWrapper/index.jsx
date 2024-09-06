import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';

const LayoutWrapper = () => {
    console.log('layoutwrapper');

    return (
        <React.Fragment>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-4">
                        <div className="mt-5">
                            <Header />
                            <Outlet />  
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default LayoutWrapper;