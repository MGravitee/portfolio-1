import { NavLink } from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <h1 className="err-heading">Uh oh, something went wrong WOMP WOMP</h1>

            <p className="prgrph">
                Not sure what happened but we couldn't find the page you're
                looking for.
            </p>
            <NavLink className="back-to-home" to="/">Back to Home</NavLink>
        </>
    );
}
export default ErrorPage;