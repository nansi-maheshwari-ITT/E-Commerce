
import { AuthButtonPropsType } from './AuthButtonPropsType'

export const AuthButton:React.FC<AuthButtonPropsType> = ({text}) => {
  return (
	<button type='submit'>{text}</button>
  )
}
