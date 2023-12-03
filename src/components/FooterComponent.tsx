import React, { useState } from 'react';
import '../styles/styles.css'
import { Box, Text } from "@chakra-ui/react"
import { text } from 'stream/consumers';

function FooterComponent(): JSX.Element {
    const [message, setMessage] = useState<string>('Hello, World!');
    const [backgroundColor, setBackgroundColor] = useState<string>("#fff");
    const [textColor, setTextColor] = useState<string>("#000");

    const handleClick = (): void => {
        setMessage('Button Clicked!');
    };

    return (
        <footer className="mainWrapper" style={{ backgroundColor: backgroundColor, color: textColor }} >
            <div className="footerColumn">
                <h3>Column 1</h3>
                <ul>
                    <li><Box p={8}>
                        <Text fontSize="xl">Hello World</Text>
                    </Box></li>
                    <li><a href="#">Page 2</a></li>
                    <li><a href="#">Page 3</a></li>
                </ul>
                src/gatsby-types.d.ts            </div>
            <div className="footerColumn">
                <h3>Column 2</h3>
                <ul>
                    <li><a href="#">Page 4</a></li>
                    <li><a href="#">Page 5</a></li>
                    <li><a href="#">Page 6</a></li>
                </ul>
            </div>
            <div className="footerColumn">
                <h3>Column 3</h3>
                <ul>
                    <li><a href="#">Page 7</a></li>
                    <li><a href="#">Page 8</a></li>
                    <li><a href="#">Page 9</a></li>
                </ul>
            </div>
        </ footer>
    );
}

export default FooterComponent;