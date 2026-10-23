import { Link } from "react-router-dom";

function Login() {
    function handleSubmit(event) {
        event.preventDefault();
        
    }

    return (
        <>
            <section className="auth-page">
                <form className="auth-card" onSubmit={handleSubmit}>
                    <h1>Welcome Back</h1>
                    <p>Sign in to your account.</p>

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
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                    />

                    <button className="button" type="submit">
                        Login
                    </button>

                    <p>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </section>
        </>
    );
}

export default Login;