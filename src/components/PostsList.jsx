import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export const PostsList = ({ posts }) => {
  return (
    <div
      className="mt-3 mb-3"
      style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: 900,
        justifyContent: "space-between",
      }}>
      {posts.map((post) => (
        <Card
          key={post.id}
          style={{
            width: 250,
            marginBottom: 24,
          }}>
          <Card.Img variant="top" src={post.image} />
          <Card.Body>
            <NavLink to={`/post/${post.id}`}>
              <Card.Title>{post.title}</Card.Title>
            </NavLink>
            <Card.Text style={{ height: "75px" }}>{post.text}</Card.Text>
          </Card.Body>
          <Card.Footer>{post.createdAt}</Card.Footer>
        </Card>
      ))}
    </div>
  );
};
