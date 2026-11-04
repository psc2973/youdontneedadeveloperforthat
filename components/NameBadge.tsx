type Props = {
  role?: string;
  added?: string;
  pill?: string;
};

export default function NameBadge({ role, added, pill }: Props) {
  return (
    <div
      className="badge"
      role="img"
      aria-label={`Name badge: Hello, my role is ${role ?? ""}, plus ${added ?? ""} written in by hand`}
    >
      <div className="badge-top">
        <b>HELLO</b>
        <span>my role is</span>
      </div>
      <div className="badge-body">
        <div className="role">{role}</div>
        {added && <div className="added">{added}</div>}
      </div>
      {pill && <div className="hat-pill">{pill}</div>}
    </div>
  );
}
