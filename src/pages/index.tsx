import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Image, Text, Link } from "@chakra-ui/react"
import ResponsiveComponentExample from "../components/ResponsiveComponentExample"
import ResponsiveColumnExample from "../components/ResponsiveColumnExample"
// import ResponsiveColumnMobileExample from "../components/ResponsiveColumnMobileExample"
import ResponsiveFooter from "../components/ResponsiveFooter"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (

  <>
    <Layout title="TEST">
      <SEO title="Home" />

      <ResponsiveColumnExample></ResponsiveColumnExample>
      <ResponsiveComponentExample title='Simple Static Website' tag='Cloud'></ResponsiveComponentExample>
      <ResponsiveComponentExample title='What is a Kubelet?' tag='Kubernetes'></ResponsiveComponentExample>
      <ResponsiveComponentExample title='EFS vs S3' tag='Cloud'></ResponsiveComponentExample>
      <ResponsiveComponentExample title='Amazon Linux 2' tag='Cloud'></ResponsiveComponentExample>
      <ResponsiveComponentExample title='Simple Static Website' tag='Cloud'></ResponsiveComponentExample>
      <ResponsiveComponentExample title='Convert Systemd to Service' tag='Linux'></ResponsiveComponentExample>
      <ResponsiveComponentExample title='What can you edit without yaml file?' tag='Kubernetes'></ResponsiveComponentExample>
      <ResponsiveComponentExample title='All types of objects' tag='Kubernetes'></ResponsiveComponentExample>
      <ResponsiveComponentExample title='Audit, simple use-case' tag='Linux'></ResponsiveComponentExample>

      {/* <Link to="/">Go back to the homepage</Link> */}

    </Layout>
    <ResponsiveFooter></ResponsiveFooter>
  </>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`