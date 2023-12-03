// import { Link } from "gatsby"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Stack, Wrap, WrapItem } from "@chakra-ui/react"
import PropTypes from "prop-types"
import React from "react"
import LinksExample from "./LinksExample"


const ResponsiveSidebarExample = () => {
    // const { routes } = props;
    // SIDEBAR
    return (
        <Flex direction='column' pt='25px' px="16px" borderRadius='30px'>
            <Accordion>
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
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Linux
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
            </Accordion>
        </Flex>
    );
}

ResponsiveSidebarExample.propTypes = {
    siteTitle: PropTypes.string,
}

export default ResponsiveSidebarExample