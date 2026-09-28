/**
 * Re-mounts on every navigation, so each page fades up into place. The
 * animation ends on `transform: none`, which keeps position:fixed descendants
 * anchored to the viewport once it has finished.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
