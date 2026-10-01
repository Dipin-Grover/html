/** The paragraph. The phrase for the active pillar gets underlined. */
function Phrase({ id, mode, children }) {
  return <mark className={mode === id ? 'on' : ''}>{children}</mark>;
}

export default function Lead({ mode }) {
  return (
    <p className="lead">
      Step into a realm of unwavering assurance where <Phrase id="secure" mode={mode}>data protection</Phrase>,{' '}
      <Phrase id="private" mode={mode}>discreet privacy</Phrase>, and{' '}
      <Phrase id="compliant" mode={mode}>adherence to protocols</Phrase> converge seamlessly. Your peace of mind is
      fortified as we uphold a commitment to security, privacy, and compliance.
    </p>
  );
}
