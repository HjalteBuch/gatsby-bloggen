import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link className="article" to={"/blog/" + post.frontmatter.slug}>
        <img 
            className="image"
            src={post.frontmatter.image01.publicURL} 
            alt={post.frontmatter.title}
        ></img>
        <h1 className="header">{post.frontmatter.title} ({post.frontmatter.date})</h1>
    </Link>
    <p>description: {post.frontmatter.description}</p>
  </div>
)

export default PostLink
