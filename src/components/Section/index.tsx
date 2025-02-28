export default function Section({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section {...props} className={`${props.className} mb-8`}>
      {children}
    </section>
  );
}
