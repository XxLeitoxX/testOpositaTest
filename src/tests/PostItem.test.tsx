import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PostItem from "../components/PostItem";
import { FavoriteProvider } from "../context/FavoriteContext";

describe("PostItem", () => {
  const post = {
    id: 1,
    title: "Test title",
    tags: ["tag1", "tag2", "tag3"],
    reactions: 5,
    body: "This is an example",
  };

  it("should render the PostItem component correctly", () => {
    const { getByText } = render(
      <FavoriteProvider>
        <PostItem
          title={post.title}
          tags={post.tags}
          body={post.body}
          reactions={post.reactions}
          id={post.id}
        />
      </FavoriteProvider>,
    );

    const titleElement = getByText("Test title");
    expect(titleElement).toBeInTheDocument();

    const tags = getByText("tag1");
    expect(tags).toBeInTheDocument();

    const reactionsElement = getByText("5 reactions");
    expect(reactionsElement).toBeInTheDocument();
  });
});
