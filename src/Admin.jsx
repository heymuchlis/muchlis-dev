import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Github,
  LoaderCircle,
  LogOut,
  LockKeyhole,
  RefreshCw
} from "lucide-react";
import {
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { auth, db } from "./firebase";

function formatDate(value) {
  if (!value?.toDate) return "Waiting for timestamp…";
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(value.toDate());
}

export default function Admin() {
  const [user, setUser] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  const loadMessages = async () => {
    setLoadingMessages(true);
    setStatus("");
    try {
      const q = query(
        collection(db, "guestbook"),
        orderBy("createdAt", "desc"),
        limit(50)
      );
      const snapshot = await getDocs(q);
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error(error);
      setStatus("Login berhasil, tetapi Firestore menolak akses. Pastikan email admin sudah dimasukkan ke firestore.rules.");
    } finally {
      setLoadingMessages(false);
    }
  };

  useEffect(() => {
    if (user?.emailVerified) loadMessages();
  }, [user]);

  const login = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const credential = await signInWithEmailAndPassword(auth, email.trim(), password);
      if (!credential.user.emailVerified) {
        setStatus("Email admin belum terverifikasi. Kirim verification email lalu login kembali.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Login gagal. Cek email dan password Firebase Authentication.");
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      setStatus("Verification email sudah dikirim. Cek inbox/spam.");
    } catch (error) {
      console.error(error);
      setStatus("Gagal mengirim verification email.");
    }
  };

  const logout = async () => {
    await signOut(auth);
    setMessages([]);
    setStatus("");
  };

  return (
    <div className="admin-page">
      <div className="admin-shell">
        <div className="admin-topbar">
          <a className="admin-back" href="/">
            <ArrowLeft size={16} /> Back to portfolio
          </a>
          <a href="https://github.com/heymuchlis" target="_blank" rel="noreferrer" className="admin-github">
            <Github size={16} /> GitHub
          </a>
        </div>

        <div className="admin-heading">
          <div>
            <span className="eyebrow">PRIVATE AREA</span>
            <h1>Guestbook Admin</h1>
            <p>Authenticated access to incoming portfolio messages.</p>
          </div>
          <LockKeyhole size={32} />
        </div>

        {user === undefined ? (
          <div className="admin-card admin-loading">
            <LoaderCircle className="spin" size={22} /> Checking session…
          </div>
        ) : !user ? (
          <form className="admin-card admin-form" onSubmit={login}>
            <h2>Sign in</h2>
            <p>Use the Firebase Authentication admin account.</p>
            <label>
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
                placeholder="••••••••"
              />
            </label>
            {status && <div className="admin-status error">{status}</div>}
            <button className="button primary" type="submit" disabled={loading}>
              {loading ? <><LoaderCircle className="spin" size={17} /> Signing in…</> : <>Sign in</>}
            </button>
          </form>
        ) : !user.emailVerified ? (
          <div className="admin-card">
            <div className="admin-alert">
              <LockKeyhole size={20} />
              <div>
                <h2>Email belum diverifikasi</h2>
                <p>{user.email}</p>
              </div>
            </div>
            {status && <div className="admin-status">{status}</div>}
            <div className="admin-actions">
              <button className="button primary" onClick={verifyEmail}>Send verification email</button>
              <button className="button ghost" onClick={logout}>Sign out</button>
            </div>
          </div>
        ) : (
          <div className="admin-content">
            <div className="admin-card admin-account">
              <div>
                <span className="eyebrow">SIGNED IN</span>
                <strong>{user.email}</strong>
                <small><CheckCircle2 size={14} /> Email verified</small>
              </div>
              <div className="admin-actions">
                <button className="button ghost" onClick={loadMessages} disabled={loadingMessages}>
                  <RefreshCw size={16} className={loadingMessages ? "spin" : ""} /> Refresh
                </button>
                <button className="button ghost" onClick={logout}>
                  <LogOut size={16} /> Sign out
                </button>
              </div>
            </div>

            <div className="admin-card">
              <div className="admin-card-title">
                <div>
                  <span className="eyebrow">MESSAGES</span>
                  <h2>Latest guestbook entries</h2>
                </div>
                <span className="message-count">{messages.length}</span>
              </div>

              {loadingMessages ? (
                <div className="admin-empty"><LoaderCircle className="spin" size={22} /> Loading messages…</div>
              ) : messages.length === 0 ? (
                <div className="admin-empty">No messages yet.</div>
              ) : (
                <div className="message-list">
                  {messages.map((message) => (
                    <article className="message-item" key={message.id}>
                      <div className="message-meta">
                        <strong>{message.name}</strong>
                        <span>{formatDate(message.createdAt)}</span>
                      </div>
                      <p>{message.message}</p>
                    </article>
                  ))}
                </div>
              )}
            </div>
            {status && <div className="admin-status error">{status}</div>}
          </div>
        )}
      </div>
    </div>
  );
}
