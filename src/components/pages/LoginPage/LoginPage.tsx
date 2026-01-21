import { Authorization } from "components/authorization"
import { AuthHeader } from "components/authorization/AuthHeader"
import { useTitle } from "hooks/useTitle"

export const LoginPage = () => {
    useTitle ('Sign in | Goods4you')
    return (
        <div>
            <AuthHeader />
            <Authorization />
        </div>
    )
}