import { LiaExternalLinkAltSolid } from "react-icons/lia";

function ProspectusButton() {
  return (
    <>
      <a
        className="no-underline outline p-4"
        href="/submerged_prospectus.pdf"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
      >
        Read the Prospectus{" "}
        <LiaExternalLinkAltSolid className="inline align-middle mb-0.5d" />
      </a>
    </>
  );
}

export default ProspectusButton;
