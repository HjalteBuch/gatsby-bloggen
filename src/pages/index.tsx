import { graphql } from "gatsby";
import * as React from "react"
import PostLink from "../components/PostLink";

const IndexPage = ({data: {allMarkdownRemark: {edges}}}) => {
    const Posts = edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <main>
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
          }
        }
      }
    }
  }
`

export const Head = () => <title>Home Page</title>
