import React from "react"
import { Link } from "gatsby"

const article = {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
}

const image = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}

const header = {
    fontSize: '80px',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    bottom: 1000,
    left: 0,
    right: 0,
    height: 'fit-content',
    margin: 'auto',
}

const PostLink = ({ post }) => (
  <div>
    <Link style={article} to={"/blog/" + post.frontmatter.slug}>
        <img 
            style={image}
            src={post.frontmatter.image01.publicURL} 
            alt={post.frontmatter.title}
        ></img>
        <h1 style={header}>{post.frontmatter.title} ({post.frontmatter.date})</h1>
    </Link>
  </div>
)

export default PostLink
