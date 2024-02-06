/**
 * @typedef {import("@prismicio/client").Content.Blog1Slice} Blog1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Blog1Slice>} Blog1Props
 * @param {Blog1Props}
 */
const Blog1 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog1 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Blog1;
