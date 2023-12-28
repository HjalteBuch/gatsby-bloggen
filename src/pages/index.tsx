import { graphql } from "gatsby";
import * as React from "react"
import PostLink from "../components/PostLink";
import "../styles/global.css";

const IndexPage = ({data: {allMarkdownRemark: {edges}}}) => {
    const Posts = edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <main className="outer">
        <div className="intro">
            <h1 className="overskrift">Hjalte I japan</h1>
            <p className="description">
                Jeg har lavet denne hjemmeside som dokumentation på min rejse i Japan.<br />
                Jeg har delt turen op i et par overordnede kategorier som kan ses på billederne nedenfor sammen med en kort beskrivelse og dato for begyndelsen på dette afsnit. 
            </p>
        </div>
        {Posts}
    </main>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: ASC }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
            thumbnail {
                publicURL
            }
          }
        }
      }
    }
  }
`

export const Head = () => <title>Home Page</title>
