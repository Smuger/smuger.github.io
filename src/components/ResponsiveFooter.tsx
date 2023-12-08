// import { Link } from "gatsby"
import { Box, Flex, Button, Text, Tabs, TabList, Tab, TabPanel, TabPanels, useColorModeValue, VStack, useStyleConfig } from "@chakra-ui/react"
import PropTypes from "prop-types"
import React from "react"

// import {
//     renderThumb,
//     renderTrack,
//     renderView,
// } from "./Scrollbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import ResponsiveSidebarExample from "./ResponsiveSidebarExample";


const ResponsiveFooter = (props: any) => {
    const { variant, ...rest } = props;

    let sidebarBg = useColorModeValue("white", "navy.800");
    let shadow = useColorModeValue(
        "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
        "unset"
    );
    let sidebarMargins = "0px";
    let variantChange = "0.2s linear";

    console.log(variant)
    var color = 'black'
    if (variant == "dark") {
        color = 'white'
    }
    else {
        color = 'black'
    }

    return (
        <Box as="footer" p={12} textAlign="center">
            {/* bgGradient='linear(to-r, blackAlpha.900, gray.700)' */}
            <VStack spacing={2}>
                <Text color={color} >© {new Date().getFullYear()} Krzysztof Kwietniewski</Text>
                {/* <Link as={RouterLink} to="/about" color="blue.500">
                    About Me
                </Link> */}
            </VStack>
        </Box>
    )
}

// ResponsiveFooter.propTypes = {
//     siteTitle: PropTypes.string,
// }

export default ResponsiveFooter