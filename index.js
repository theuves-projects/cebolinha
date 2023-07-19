"use strict";

function cebolinha(string) {
  if (typeof string !== "string") return string;

  return string
    .replace(/r(?=(l|L))/g, "u")
    .replace(/R(?=(l|L))/g, "U")
    .replace(/r+(?!\b)/g, "l")
    .replace(/R+(?!\b)/g, "L")
    .replace(/r(?=[À-ÖØ-ö])/g, "l")
    .replace(/R(?=[À-ÖØ-ö])/g, "L");
}

module.exports = cebolinha;
