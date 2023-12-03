// import { Link } from "gatsby"
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";
import { Box, Flex, Button, Text, Tabs, TabList, Tab, Accordion, useColorModeValue, Menu, MenuButton, MenuList, MenuItem, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, WrapItem } from "@chakra-ui/react"
import PropTypes from "prop-types"
import React from "react"

// import {
//     renderThumb,
//     renderTrack,
//     renderView,
// } from "./Scrollbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import ResponsiveSidebarExample from "./ResponsiveSidebarExample";
import { IconButton } from '@chakra-ui/react'


const ResponsiveColumnMobileExample = ({ siteTitle = "" }) => {
    let sidebarBg = useColorModeValue("white", "navy.800");
    let shadow = useColorModeValue(
        "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
        "unset"
    );
    let sidebarMargins = "0px";
    let variantChange = "0.2s linear";

    return (
        <Box display={{ base: "block", md: "none" }} w="100%" >
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <MenuItem >
                        Cluster
                    </MenuItem>
                    <MenuItem >
                        Kubernetes
                    </MenuItem>
                    <MenuItem >
                        Linux
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>

    )
}

ResponsiveColumnMobileExample.propTypes = {
    siteTitle: PropTypes.string,
}

export default ResponsiveColumnMobileExample

{/* <Accordion>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Cloud
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <WrapItem p='1'>
                            <Button colorScheme='gray'>Gray</Button>
                        </WrapItem>
                        <WrapItem p='1'>
                            <Button colorScheme='gray'>Gray</Button>
                        </WrapItem>
                        <WrapItem p='1'>
                            <Button colorScheme='gray'>Gray</Button>
                        </WrapItem>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Kubernetes
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <WrapItem p='1'>
                            <Button colorScheme='gray'>Gray</Button>
                        </WrapItem>
                        <WrapItem p='1'>
                            <Button colorScheme='gray'>Gray</Button>
                        </WrapItem>
                        <WrapItem p='1'>
                            <Button colorScheme='gray'>Gray</Button>
                        </WrapItem>
                    </AccordionPanel>
                </AccordionItem>
                
            </Accordion> */}