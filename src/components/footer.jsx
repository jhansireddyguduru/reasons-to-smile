import React from "react"
import { Box, Anchor, Text } from "grommet"
import {
  Twitter,
  MailOption,
  Instagram,
  Github,
  Facebook,
} from "grommet-icons"

import config from "../config"

const Footer = () => (
  <Box background="dark-2" fill="horizontal" pad={{ horizontal: `small` }}>
    <Box
      alignSelf="center"
      width="xxlarge"
      margin={{ horizontal: `medium`, vertical: `small` }}
      gap="medium"
    >
      <Box direction="row" gap="xsmall">
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Instagram"
          icon={<Instagram color="accent-3" />}
          href={`https://instagram.com/${config.instagram}/`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Twitter"
          icon={<Twitter color="accent-3" />}
          href={`https://twitter.com/${config.twitter}`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Facebook"
          icon={<Facebook color="accent-3" />}
          href={`https://facebook.com/${config.facebook}`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Email"
          icon={<MailOption color="accent-3" />}
          href={`mailto:${config.email}`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Github"
          icon={<Github color="accent-3" />}
          href={`https://github.com/${config.github}`}
        />
      </Box>
      <Text>
        {`Code of this blog is released under the `}
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          color="accent-3"
          label="MIT License"
          href="https://opensource.org/licenses/MIT"
        />
        <br />
        {`, and is available on `}
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          color="accent-3"
          label="Github"
          href={`https://github.com/${config.github}`}
        />
      </Text>
    </Box>
  </Box>
)

export default Footer
