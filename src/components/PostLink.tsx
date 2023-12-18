import React from "react"
import { Link } from "gatsby"

const outer = {
    margin: 0,
    padding: 0,
}

const image = {
    margin: 0,
    width: '100%',
    padding: 0,
}

        // <img style={image} src={`../images/${post.frontmatter.title}.jpg`} alt={post.frontmatter.title}></img>
const PostLink = ({ post }) => (
  <div>
    <Link to={"/blog/" + post.frontmatter.slug}>
        <img style={image} src={post.frontmatter.image01.publicURL} alt={post.frontmatter.title}></img>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink
