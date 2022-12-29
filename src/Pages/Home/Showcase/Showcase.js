import React from 'react';

const Showcase = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/fn3VqpD/delivary.jpg" className="rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Fastest Delivary!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Showcase;