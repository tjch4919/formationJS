import { getActions } from "../src/exo05";

it("should fix the song", () => {
  expect(
    getActions()
      .map(
        action =>
          action()
            .toString()
            .match(/^[^\s,]+/)[0]
      )
      .join(" ")
  ).toBe("Trois Chapeau Paillasson Somnambule Bulletin Tintamarre");
});
