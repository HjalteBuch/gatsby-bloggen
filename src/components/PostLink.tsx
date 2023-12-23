import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link className="article" to={"/blog/" + post.frontmatter.slug}>
        <div className="image-container">
            <img 
                className="image"
                src={post.frontmatter.image01.publicURL} 
                alt={post.frontmatter.title}
            ></img>
            <h1 className="header">{post.frontmatter.title}</h1>
        </div>
    </Link>
    <p>description: {post.frontmatter.description}</p>
  </div>
)

export default PostLink
