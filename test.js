"use strict";

const cebolinha = require("./");

describe("cebolinha", () => {
  it("deveria trocar o 'r' pelo 'l'", () => {
    expect(cebolinha("prato")).toBe("plato");
    expect(cebolinha("rato")).toBe("lato");
  });
  it("não deveria trocar o 'r' quando ele está no final", () => {
    expect(cebolinha("trator")).toBe("trator");
    expect(cebolinha("comer")).toBe("comer");
  });
  it("deveria trocar 'rl' por 'ul'", () => {
    expect(cebolinha("carlos")).toBe("caulos");
    expect(cebolinha("parlamento")).toBe("paulamento");
  });
  it("deveria obedecer a caixa alta", () => {
    expect(cebolinha("PRATO")).toBe("PLATO");
    expect(cebolinha("RATO")).toBE("LATO");
  });
});

