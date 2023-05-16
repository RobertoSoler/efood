import { ButtonLink } from './styles'

type Props = {
    title: string
    to: string
}

const Button = ({ title, to }: Props) => (
    <ButtonLink to={to} title={title}>
        Saiba mais
    </ButtonLink>
)

export default Button