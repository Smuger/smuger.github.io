import { background } from '@chakra-ui/react';
import { color } from 'framer-motion';
import React, { useState } from 'react';
import '../styles/styles.css'

function BlogMainComponent(): JSX.Element {
    const [message, setMessage] = useState<string>('Hello, World!');

    const handleClick = (): void => {
        setMessage('Button Clicked!');
    };

    return (
        <main className="mainWrapper">
            <section>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>
            <section>
                <h2>Contact Us</h2>
                <p>Email: contact@example.com</p>
                <p>Phone: +1 123-456-7890</p>
            </section>
        </main>
    );
}

export default BlogMainComponent;