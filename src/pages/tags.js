import React from 'react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  padding: ${rhythm(1)};
  padding-left: ${rhythm(2)};
  margin: 0;
`
const ListItem = styled.li``

export default function Tags({ data }) {
  return (
    <React.Fragment>
      <SEO title="Tags" />
      <Container>
        <TagHeader text="All tags" />
        <List>
          {data.tags.group.map(({ name }) => {
            return (
              <ListItem key={name}>
                <Link to={`/tags/${name}`}>{name}</Link>
              </ListItem>
            )
          })}
        </List>
      </Container>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  {
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        name: fieldValue
        totalCount
      }
    }
  }
`
