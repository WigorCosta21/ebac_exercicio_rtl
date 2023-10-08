import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar dois comentários", () => {
    const { debug } = render(<PostComment />);
    fireEvent.change(screen.getByTestId("field-comments"), {
      target: {
        value: "Que perfeição!",
      },
    });
    fireEvent.click(screen.getByTestId("btn-submit"));

    fireEvent.change(screen.getByTestId("field-comments"), {
      target: {
        value: "Miniatura top do Batmóvel!",
      },
    });
    fireEvent.click(screen.getByTestId("btn-submit"));

    debug();
    expect(screen.getByText("Que perfeição!")).toBeInTheDocument();
    expect(screen.getByText("Miniatura top do Batmóvel!")).toBeInTheDocument();
  });
});
