// import { Link } from "gatsby"
import { Box, Flex, Stack, Text, HStack } from "@chakra-ui/react"
import PropTypes from "prop-types"
import React from "react"

const LinksExample = (props: any) => {
    const { routes } = props;
    // SIDEBAR
    return (
        <Box>
            <HStack
                spacing={
                    "22px"
                }
                py='5px'
                ps='10px'>
                <Flex w='100%' alignItems='center' justifyContent='center'>
                    <Box
                        color={"red"
                        }
                        me='18px'>
                        TEST
                    </Box>
                    <Text
                        me='auto'
                        color={"red"
                        }
                        fontWeight={"red"
                        }>
                        TEST2
                    </Text>
                </Flex>
                <Box
                    h='36px'
                    w='4px'
                    bg={"red"
                    }
                    borderRadius='5px'
                />
            </HStack>
        </Box>
    );
}

LinksExample.propTypes = {
    siteTitle: PropTypes.string,
}

export default LinksExample