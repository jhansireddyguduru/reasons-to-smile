import React, { useContext } from "react"

import { Box, Button, Heading, Anchor, ResponsiveContext } from "grommet"
import { Camera, Twitter, Instagram, Facebook, MailOption } from "grommet-icons"

import config from "../config"

const Header = ({ title, toggleSidebar, showSidebar }) => {
  const size = useContext(ResponsiveContext)
  return (
    <Box responsive={false} background="dark" elevation="small">
      <Box
        width="xxlarge"
        as="header"
        pad="small"
        alignSelf="center"
        direction="row"
        justify="between"
      >
        <Box
          flex={false}
          direction="row"
          align="center"
          margin={{ left: `small` }}
          gap="small"
        >
          <Button
            icon={<Camera />}
            plain
          />
          <Heading level="2" margin={{ left: `small`, vertical: `none` }}>
            {title || `ReasonsToSmile Blog`}
          </Heading>
        </Box>
        {size !== `small` && (
          <Box
            margin={{ horizontal: `medium` }}
            direction="row"
            align="center"
            gap="medium"
          >
            <Anchor
              rel="noopener noreferrer"
              target="_blank"
              a11title="Instagram"
              icon={<Instagram />}
              href={`https://instagram.com/${config.instagram}/`}
            />
            <Anchor
              rel="noopener noreferrer"
              target="_blank"
              a11title="Twitter"
              icon={<Twitter />}
              href={`https://twitter.com/${config.twitter}`}
            />
            <Anchor
              rel="noopener noreferrer"
              target="_blank"
              a11title="Facebook"
              icon={<Facebook />}
              href={`https://facebook.com/${config.facebook}`}
            />
            <Anchor
              rel="noopener noreferrer"
              target="_blank"
              a11title="Email"
              icon={<MailOption />}
              href={`mailto:${config.email}`}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Header
