import { Fragment } from "react";

/* Scientific (binomial) names that should always render in italics. */
const SPECIES = [
  "Staphylococcus borealis",
  "Escherichia coli",
  "Drosophila melanogaster",
  "E. coli",
];

const PATTERN = new RegExp(
  `(${SPECIES.map((s) => s.replace(/\./g, "\\.")).join("|")})`,
  "g"
);

/**
 * Renders text with scientific names italicized.
 * Usage: <Sci text="...Escherichia coli..." />
 */
export default function Sci({ text }: { text: string }) {
  const parts = text.split(PATTERN);
  return (
    <>
      {parts.map((part, i) =>
        SPECIES.includes(part) ? (
          <em key={i}>{part}</em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
