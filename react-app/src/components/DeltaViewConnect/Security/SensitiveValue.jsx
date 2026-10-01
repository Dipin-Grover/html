import useScramble from './useScramble';

/** One private value: scrambles to ciphertext when `encrypted`, and is covered by a bar unless `seen`. */
export default function SensitiveValue({ plain, encrypted, seen }) {
  const text = useScramble(plain, encrypted);
  return <b className={`s${seen ? ' seen' : ''}`}>{text}</b>;
}
