import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Image, Text, Link, VStack, Skeleton, useColorMode, Spacer } from "@chakra-ui/react"
import ResponsiveComponentExample from "../components/ResponsiveComponentExample"
import ResponsiveColumnExample from "../components/ResponsiveColumnExample"
import ResponsiveColumnMobileExample from "../components/ResponsiveColumnMobileExample"
import ResponsiveFooter from "../components/ResponsiveFooter"
import Header from "../components/header"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Post: React.FC<PageProps<DataProps>> = ({ data, path }) => {

  const { colorMode, toggleColorMode } = useColorMode()
  return (

    // <>
    //     <Layout title="TEST">
    //         

    //         <Text>POST</Text>
    //         {/* <Link to="/">Go back to the homepage</Link> */}
    //     </Layout>
    //     
    // </>
    <>
      <Layout title="TEST">
        <SEO title="Post" />

        <Box mt={4}>
          <Skeleton height="20px" width="90%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="75%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="60%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="80%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="70%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="90%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="75%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="60%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="80%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="70%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="90%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="75%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="60%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="80%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />
          <Skeleton height="20px" width="70%" mb={4} style={{ marginLeft: "auto", marginRight: "auto" }} />

        </Box>

      </Layout>

      <ResponsiveFooter variant={colorMode}></ResponsiveFooter>
    </>

  )
}

export default Post

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`