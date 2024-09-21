import css from "../ErrorMessage/ErrorMessage.module.css"

type Props = {
  error: string
}

const ErrorMessage = ({error}: Props) => {
  return (
    <p className={css.message}>{error}, Please try again later</p>
  )
}

export default ErrorMessage