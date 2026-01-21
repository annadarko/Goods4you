import { Authorization } from "components/authorization"
import { LoginHeader } from "components/authorization/LoginHeader"

import { useTitle } from "hooks/useTitle"

export const LoginPage = () => {
    useTitle ('Sign in | Goods4you')
    return (
        <div>
            <LoginHeader />
            <Authorization />
        </div>
    )
}