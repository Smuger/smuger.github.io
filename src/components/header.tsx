import { Box, Image, Flex, Center } from "@chakra-ui/react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ResponsiveColumnMobileExample from "./ResponsiveColumnMobileExample"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle = "" }) => (
    <Flex
        as="header"
        align="center"
        justify="space-between"
        padding="4"
        borderBottom="1px"
        borderColor="gray.200"
        width="100%"
    >
        {/* Logo on the left */}
        <Box>
            {/* Your logo component or image goes here */}
            {/* <Image src='' /> */}

            <Link
                to="/"
                style={{

                    textDecoration: "none",
                }}
            >
                <StaticImage src="../images/logo.svg" alt="Logo" width={50} />
            </Link>

        </Box>
        <Center>
            Kwietniewski Cloud
        </Center>

        {/* Button on the right */}
        <Box>
            <ResponsiveColumnMobileExample></ResponsiveColumnMobileExample>
        </Box>
    </Flex>
)

// const Header = ({ siteTitle = "" }) => (
//     <header
//         style={{
//             background: `rebeccapurple`,
//             marginBottom: `1.45rem`,
//         }}
//     >
//         <div
//             style={{
//                 margin: `0 auto`,
//                 maxWidth: 960,
//                 padding: `1.45rem 1.0875rem`,
//             }}
//         >
//             <h1 style={{ margin: 0 }}>
//                 <Link
//                     to="/"
//                     style={{
//                         color: `white`,
//                         textDecoration: `none`,
//                     }}
//                 >
//                     {siteTitle}
//                 </Link>
//             </h1>
//             <ResponsiveColumnMobileExample></ResponsiveColumnMobileExample>
//         </div>
//     </header>
// )

Header.propTypes = {
    siteTitle: PropTypes.string,
}

export default Header