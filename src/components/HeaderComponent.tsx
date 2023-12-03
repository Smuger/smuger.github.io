import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, ExternalLinkIcon, AddIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
import React, { useState } from 'react';
import '../styles/styles.css'

function HeaderComponent(): JSX.Element {
    const [message, setMessage] = useState<string>('Hello, World!');
    const [backgroundColor, setBackgroundColor] = useState<string>("#373434");
    const [textColor, setTextColor] = useState<string>("#fff");

    const handleClick = (): void => {
        setMessage('Button Clicked!');
    };

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                <MenuItem icon={<AddIcon />} command='⌘T'>
                    New Tab
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                    New Window
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                    Open Closed Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />} command='⌘O'>
                    Open File...
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default HeaderComponent;