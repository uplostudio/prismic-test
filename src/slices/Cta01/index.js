/**
 * @typedef {import("@prismicio/client").Content.Cta01Slice} Cta01Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Cta01Slice>} Cta01Props
 * @param {Cta01Props}
 */
const Cta01 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      AAAA Placeholder component for cta01 (variation: {slice.variation}) Slices
    </section>

  );
};

export default Cta01;
