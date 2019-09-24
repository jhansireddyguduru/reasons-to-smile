import React, { Component, Fragment, useState, useContext } from "react"
import _ from "lodash"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { Box, Heading, Anchor, Text } from "grommet"
import { MapLocation, Car, Globe, Schedule } from "grommet-icons"
import { ResponsiveContext } from "grommet"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

import App from "../components/layout"
import Posts from "../components/posts"
import Section from "../components/section"
import { flatten, groupBy, coordinates, calculateTotals } from "../tools"

const IndexPage = ({ data }) => {
  const [didViewCountUp, setViewCountUp] = useState(false)
  const { edges: posts } = data.allMarkdownRemark
  const nodes = flatten(posts)
  const { [true]: featured, [null]: latest } = groupBy(nodes, `featured`)
  const coords = coordinates(nodes)
  const totals = calculateTotals(nodes)
  const countries = _.uniq(nodes.map(post => post.frontmatter.country)).length
  return (
    <>
      <App>
        <Section title="Featured articles">
          <Posts posts={featured} />
        </Section>
        <Section
          background="light-3"
          title="Hello there,"
          pad={{ horizontal: `xlarge`, vertical: `small` }}
        >
          <Box direction="row-responsive" margin="medium">
            <Box align="center" basis="3/4">
              <Text size="large">
                Welcome to the ReasonToSmile blog.
                <br />
                This is my lifestyle blog to include information about my
                crafts, paintings, traveling to new places, and finding out
                interesting adventures and take casual photos.
                <br />
                <br />
                This blog also gives an area for friends to share some of their
                experiences
                <br />
                <br />
                Would you like to take a stroll around the ResonsToSmile world?
                <br />
                <br />
                Then, follow along on our short adventures as we capture the
                planet!
                <Anchor
                  onClick={() => navigate(`/about`)}
                  label=" Read more"
                  size="medium"
                  color="neutral-3"
                />
              </Text>
            </Box>
          </Box>
        </Section>
      </App>
    </>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "about/up.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { in: ["photo", "article"] } } }
    ) {
      edges {
        node {
          id
          timeToRead
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            km
            featured
            itinerary
            duration
            coordinates {
              country
              coordinates
            }
            country
            cover {
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
