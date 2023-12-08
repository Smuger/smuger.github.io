import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Image, Text, Link, VStack, Skeleton } from "@chakra-ui/react"
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
      <SEO title="Post" />
      <VStack
        height="100vh" // Set the height of the container to the full viewport height
        maxWidth="800px" // Set the maximum width of the container
        mx="auto" // Center the container horizontally
        p={4} // Add some padding for better visual appearance
      >
        <Header siteTitle='post' />
        <Skeleton height="20px" width="70%" mb={4} /> {/* Example skeleton element */}
        <Skeleton height="20px" width="60%" mb={4} /> {/* Another example */}
        {/* Add more skeleton elements as needed */}

      </VStack>


      <ResponsiveFooter></ResponsiveFooter>
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