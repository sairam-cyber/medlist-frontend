import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AskMedica = () => {
    return (
        <div className="ask-medica">
            <div className="ask-content">
                <h3>Ask anything about your health.</h3>
                <p>Get trusted answers directly from Medisa</p>
                <Link href="/chatbot">
                    <button className="ask-button">Ask Medisa</button>
                </Link>
            </div>
            <div className="chatbot-image">
                <Image src="/image/15 img.png" alt="Doctor" width={100} height={180} />
            </div>
        </div>
    );
};

export default AskMedica;