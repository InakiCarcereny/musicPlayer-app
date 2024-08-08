import { screen, render } from "@testing-library/react";
import { SectionAlbums } from "@/app/components/SectionAlbums";

it("should render 'Albums' section", () => {
  render(<SectionAlbums />);
  const element = screen.getByText("Albums");
  expect(element).toBeInTheDocument();
});