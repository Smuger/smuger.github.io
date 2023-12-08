// import { Link } from "gatsby"
import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import React from "react"

interface ResponsiveComponentProps {
    tag: string;
    title: string;
}

const ResponsiveComponentExample = (props: ResponsiveComponentProps) => {
    const leftPadding = useBreakpointValue({ base: `1rem`, md: `350px`, lg: `350px` });

    return (
        <Box p={4} display={{ md: "flex" }} paddingLeft={leftPadding}>
            <Box flexShrink={0}>
                <Image
                    borderRadius="lg"
                    width={{ md: 40 }}
                    src="https://bit.ly/2jYM25F"
                    alt="Woman paying for a purchase"
                />
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="teal.600"
                >
                    {props.tag}
                </Text>
                {/* <Link
                    mt={1}
                    display="block"
                    fontSize="lg"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                >
                    {props.title}
                </Link> */}
                <Link
                    to="/post"
                    style={{

                        textDecoration: "none",
                    }}
                >
                    {props.title}
                </Link>
                <Text mt={2} color="gray.500">
                    Getting a new business off the ground is a lot of hard work. Here are five
                    ideas you can use to find your first customers.
                </Text>
            </Box>
        </Box>
    )
}

ResponsiveComponentExample.defaultProps = {
    tag: `NoTag`,
    title: `NoTitle`
}


ResponsiveComponentExample.propTypes = {
    tag: PropTypes.string,
    title: PropTypes.string,
}

export default ResponsiveComponentExample