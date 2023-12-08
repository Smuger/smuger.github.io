// import { Link } from "gatsby"
import { Box, Flex, Button, Text, Tabs, TabList, Tab, TabPanel, TabPanels, useColorModeValue } from "@chakra-ui/react"
import PropTypes from "prop-types"

// import {
//     renderThumb,
//     renderTrack,
//     renderView,
// } from "./Scrollbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import ResponsiveSidebarExample from "./ResponsiveSidebarExample";
import SearchField from "./SearchField";
import React, { useState, useEffect } from 'react';


const ResponsiveColumnExample = () => {
    const [theme, setTheme] = useState<string>('light');

    let sidebarBg = useColorModeValue("white", "navy.800");
    let shadow = useColorModeValue(
        "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
        "unset"
    );
    let sidebarMargins = "0px";
    let variantChange = "0.2s linear";

    useEffect(() => {
        const savedTheme = localStorage.getItem('siteTheme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const handleThemeChange = (selectedTheme: string) => {
        setTheme(selectedTheme);
        localStorage.setItem('siteTheme', selectedTheme);
    };

    return (
        <Box p={4} position='relative'>
            <Box display={{ base: "none", md: "block" }} position='absolute' w="300px" >
                <Box flex="1" p={4}>
                    {/* Your main content goes here */}
                    <Box p={4}>
                        <SearchField />
                        <Text>{theme}</Text>
                        <Button onClick={() => handleThemeChange('light')}>Light Theme</Button>
                        <Button onClick={() => handleThemeChange('dark')}>Dark Theme</Button>
                        {/* Add other components/content here */}
                    </Box>
                </Box>
                <Box
                    bg={sidebarBg}
                    transition={variantChange}
                    w='300px'
                    m={sidebarMargins}
                    overflowX='hidden'
                    boxShadow={shadow}>
                    <ResponsiveSidebarExample />

                    {/* <Scrollbars
                    autoHide
                    renderTrackVertical={renderTrack}
                    renderThumbVertical={renderThumb}
                    renderView={renderView}>
                    
                </Scrollbars> */}
                </Box>
                {/* Main Content */}


            </Box>
        </Box>
    )
}

ResponsiveColumnExample.propTypes = {
    siteTitle: PropTypes.string,
}

export default ResponsiveColumnExample