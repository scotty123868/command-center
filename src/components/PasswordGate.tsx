import { useState, type ReactNode, type FormEvent } from 'react';

const AUTH_KEY = 'upskiller_auth';

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(AUTH_KEY) === 'true');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (authed) return <>{children}</>;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === 'upskiller26') {
      sessionStorage.setItem(AUTH_KEY, 'true');
      setAuthed(true);
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ background: 'var(--cc-bg, #09090b)' }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm mx-4 rounded-2xl p-8 flex flex-col items-center gap-6"
        style={{
          background: 'var(--cc-sidebar-bg, #111113)',
          border: '1px solid var(--cc-border, #1e1e22)',
        }}
      >
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-xl font-semibold" style={{ color: 'var(--cc-text, #fafafa)' }}>
            UpSkiller AI
          </h1>
          <p className="text-sm" style={{ color: 'var(--cc-text-secondary, #71717a)' }}>
            Enter password to continue
          </p>
        </div>

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          autoFocus
          className="w-full h-10 px-3 rounded-lg text-sm outline-none transition-colors"
          style={{
            background: 'var(--cc-bg-input, #18181b)',
            color: 'var(--cc-text, #fafafa)',
            border: `1px solid ${error ? '#ef4444' : 'var(--cc-border, #27272a)'}`,
          }}
        />

        {error && (
          <p className="text-sm -mt-4" style={{ color: '#ef4444' }}>
            Incorrect password
          </p>
        )}

        <button
          type="submit"
          className="w-full h-10 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: 'var(--cc-accent, #6366f1)' }}
        >
          Continue
        </button>
      </form>
    </div>
  );
}
