import { graphql } from "gatsby";
import * as React from "react"
import PostLink from "../components/PostLink";

const outer = {
    margin: 0,
    padding: 0,
}

const IndexPage = ({data: {allMarkdownRemark: {edges}}}) => {
    const Posts = edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <main style={outer}>
        {Posts}
    </main>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            image01 {
                publicURL
            }
          }
        }
      }
    }
  }
`

export const Head = () => <title>Home Page</title>
