import { Link } from "react-router-dom";

function Signup() {
    function handleSubmit(event) {
        event.preventDefault();

    }

    return (
        <>
            <section className="auth-page">
                <form className="auth-card" onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <p>Join us and discover your next watch.</p>

                    <label htmlFor="name">Full name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        autoComplete="name"
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        autoComplete="new-password"
                        minLength={8}
                        required
                    />

                    <button className="button" type="submit">
                        Create Account
                    </button>

                    <p>
                        Already registered? <Link to="/login">Login</Link>
                    </p>
                </form>
            </section>
        </>

    );
}

export default Signup;