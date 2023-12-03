// import { Link } from "gatsby"
import { Box, Flex, Button, Text, Tabs, TabList, Tab, TabPanel, TabPanels, useColorModeValue } from "@chakra-ui/react"
import PropTypes from "prop-types"
import React from "react"

// import {
//     renderThumb,
//     renderTrack,
//     renderView,
// } from "./Scrollbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import ResponsiveSidebarExample from "./ResponsiveSidebarExample";
import SearchField from "./SearchField";


const ResponsiveColumnExample = () => {
    let sidebarBg = useColorModeValue("white", "navy.800");
    let shadow = useColorModeValue(
        "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
        "unset"
    );
    let sidebarMargins = "0px";
    let variantChange = "0.2s linear";

    return (
        <Box p={4} position='relative'>
            <Box display={{ base: "none", md: "block" }} position='absolute' w="300px" >
                <Box flex="1" p={4}>
                    {/* Your main content goes here */}
                    <Box p={4}>
                        <SearchField />
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