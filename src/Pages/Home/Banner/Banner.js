import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/bWJ1z20/bnr.jpg")` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 lg:text-5xl font-bold">Welcome to Kinoon eCommerce</h1>
                    <p className="mb-5 font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;