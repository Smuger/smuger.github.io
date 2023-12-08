// import { Link } from "gatsby"
import { Box, Flex, Button, Text, Tabs, TabList, Tab, TabPanel, TabPanels, useColorModeValue, VStack } from "@chakra-ui/react"
import PropTypes from "prop-types"
import React from "react"

// import {
//     renderThumb,
//     renderTrack,
//     renderView,
// } from "./Scrollbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import ResponsiveSidebarExample from "./ResponsiveSidebarExample";


const ResponsiveFooter = ({ siteTitle = "" }) => {
    let sidebarBg = useColorModeValue("white", "navy.800");
    let shadow = useColorModeValue(
        "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
        "unset"
    );
    let sidebarMargins = "0px";
    let variantChange = "0.2s linear";

    return (
        <Box as="footer" p={12} bgGradient='linear(to-r, blackAlpha.900, gray.700)' textAlign="center">
            <VStack spacing={2}>
                <Text color='whiteAlpha.900' >© {new Date().getFullYear()} Krzysztof Kwietniewski</Text>
                {/* <Link as={RouterLink} to="/about" color="blue.500">
                    About Me
                </Link> */}
            </VStack>
        </Box>
    )
}

ResponsiveFooter.propTypes = {
    siteTitle: PropTypes.string,
}

export default ResponsiveFooter