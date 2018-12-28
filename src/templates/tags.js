import React from 'react'
import styled from '@emotion/styled'

import { rhythm } from '../utils/typography'
import { getColorFromString } from '../utils/color'

import Preview from '../components/preview'
import SEO from '../components/seo'

const Header = styled.h1`
  background-color: ${props => getColorFromString(props.text)};
  color: white;
  margin: ${rhythm(1 / 2)} auto;
  padding: ${rhythm(1 / 4)};
  text-align: center;
  @media only screen and (min-width: 768px) {
    max-width: 65%;
  }
`

const TagHeader = ({ text }) => {
  return <Header text={text}>{text}</Header>
}

export default function Tags({ pageContext }) {
  const { tag, tagName } = pageContext
  const len = tag.length
  return (
    <React.Fragment>
      <SEO title={tagName} />
      <TagHeader text={`${len} post${len > 1 ? 's' : ''} about "${tagName}"`} />
      {tag.map(post => {
        return (
          <Preview
            key={post.id}
            html={post.excerpt.slice(0, 150) + '...'}
            date={post.frontmatter.date}
            title={post.frontmatter.title}
            to={post.frontmatter.path}
          />
        )
      })}
    </React.Fragment>
  )
}
