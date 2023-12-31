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

        <>

            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`
                }}
            >
                <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
                <main>{children}</main>

            </div>
        </>
    )
}

// Layout.propTypes = {
//     children: PropTypes.node.isRequired,
// }

export default Layout

