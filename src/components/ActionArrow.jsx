// The same image used by the homepage hero, rotated for directional controls.
export function ActionArrow({ direction = "up-right" }) {
  return <img className={`action-arrow action-arrow-${direction}`} src="/images/upper-right-arrow.png" alt="" aria-hidden="true" />;
}
