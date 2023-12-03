// import { Link } from "gatsby"
import { Search2Icon } from "@chakra-ui/icons";
import { Box, Flex, Button, Text, Tabs, TabList, Tab, Accordion, useColorModeValue, Menu, MenuButton, MenuList, MenuItem, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, WrapItem, InputGroup, Input, InputLeftElement, Icon } from "@chakra-ui/react"
import PropTypes from "prop-types"
import React, { useState } from "react"

// import {
//     renderThumb,
//     renderTrack,
//     renderView,
// } from "./Scrollbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import ResponsiveSidebarExample from "./ResponsiveSidebarExample";
import { IconButton } from '@chakra-ui/react'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";


const SearchField = ({ siteTitle = "" }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e: any) => {
        setSearchTerm(e.target.value);
        // Perform any search-related actions or updates here
    };

    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none" children={<Icon as={Search2Icon} color="gray.300" />} />
            <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                borderRadius="full"
                borderColor="gray.200"
                _focus={{ borderColor: "blue.400", boxShadow: "outline" }}
            />
        </InputGroup>
    );
}

SearchField.propTypes = {
    siteTitle: PropTypes.string,
}

export default SearchField
