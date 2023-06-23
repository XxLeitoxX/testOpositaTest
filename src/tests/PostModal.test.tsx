import { render, fireEvent } from "@testing-library/react";
import {
  FavoriteProvider,
  //useFavoriteContext,
} from "../context/FavoriteContext";
import PostModal from "../components/PostModal";
import "@testing-library/jest-dom/extend-expect";

describe("PostModal", () => {
  const mockOnClose = jest.fn();
  const mockToggleFavorite = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
    mockToggleFavorite.mockClear();
  });

  it("Renderiza el componente PostModal correctamente", () => {
    const props = {
      isOpen: true,
      onClose: mockOnClose,
      title: "Título de prueba",
      body: "Contenido de prueba",
      tags: ["tag1", "tag2", "tag3"],
      reactions: 5,
      comment: [
        {
          id: 1,
          comments: [],
          body: "Comentario 1",
        },
        {
          id: 2,
          comments: [],
          body: "Comentario 2",
        },
        {
          id: 3,
          comments: [],
          body: "Comentario 3",
        },
      ],
      id: 1,
    };

    const { getByText, getAllByTestId } = render(
      <FavoriteProvider>
        <PostModal
          isOpen={props.isOpen}
          onClose={props.onClose}
          title={props.title || ""}
          body={props?.body || ""}
          tags={props?.tags || []}
          reactions={props?.reactions || 0}
          id={props?.id || 0}
          comment={props.comment}
        />
      </FavoriteProvider>,
    );

    const titleElement = getByText("Título de prueba");
    expect(titleElement).toBeInTheDocument();

    const bodyElement = getByText("Contenido de prueba");
    expect(bodyElement).toBeInTheDocument();

    const tagElements = getByText("tag1");
    expect(tagElements).toBeInTheDocument();

    const reactionsElement = getByText("Reactions: 5");
    expect(reactionsElement).toBeInTheDocument();

    const commentElements = getAllByTestId("comment");
    expect(commentElements.length).toBe(3);
  });

  it("Llama a la función onClose al cerrar el modal", () => {
    const props = {
      isOpen: true,
      onClose: mockOnClose,
      title: "Título de prueba",
      body: "Contenido de prueba",
      tags: [],
      reactions: 0,
      comment: [],
      id: 1,
    };

    const { getByLabelText } = render(
      <FavoriteProvider>
        <PostModal {...props} />
      </FavoriteProvider>,
    );

    const closeButton = getByLabelText("Close");
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
