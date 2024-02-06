import { login, signup } from "./actions"

export default function LoginPage() {
  return (
    <main className="min-h-screen grid place-items-center">
      <form className="flex flex-col gap-3">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            className="text-black px-2 py-1 rounded"
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            className="text-black px-2 py-1 rounded"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex flex-col gap-3 mt-6">
          <button className="border px-2 py-1 rounded" formAction={login}>Log in</button>
          <div className="border-b border-zinc-500 mx-24"></div>
          <button className="underline" formAction={signup}>Sign up</button>
        </div>
      </form>
    </main>
  )
}
