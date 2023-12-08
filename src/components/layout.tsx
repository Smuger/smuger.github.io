/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import ResponsiveFooter from "./ResponsiveFooter"
import { Button, Container, useColorMode, VStack } from "@chakra-ui/react";
// import "../styles/layout.css"

interface WrapperProps {
  title: string;
  children: ReactNode;
}

const Layout: React.FC<WrapperProps> = ({ title, children }) => {

  const data = useStaticQuery(graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `)

  return (

    <VStack>
      <Container maxW='container.sm'>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

        <main>{children}</main>
      </Container>
    </VStack>
  )
}

// Layout.propTypes = {
//     children: PropTypes.node.isRequired,
// }

export default Layout

