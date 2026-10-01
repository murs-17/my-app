import "./BlogPost.css";
function BlogPost() { return ( <div className="blog-post"> <img
className="blog-image"
src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
alt="React Components"
/>
  <div className="blog-content">
    <h2 className="blog-title">Learn React Components</h2>

    <p className="blog-info">
      By Ahmad <span>•</span> Sep 14, 2026
    </p>

    <p className="blog-description">
      Learn the basics of React components and JSX. Build clean and
      reusable user interfaces with React.
    </p>

    <button className="read-more-button">Read More</button>
  </div>
</div>
); }
export default BlogPost;