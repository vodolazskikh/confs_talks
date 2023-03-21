
interface IProps {
  title: string
  href: string

  className?: string
}

export function Link(props: IProps) {
  return (
    <a
      href={props.href}
      target='_blank'
      class={props.className ? `${props.className} hover:text-blue-400` : 'hover:text-blue-400'}
    >
      {props.title}
    </a>
  );
}
