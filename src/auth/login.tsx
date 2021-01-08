import React, {FC, useState} from "react";

import Animation from "../animation";
import {encodeStep, initialStep} from "../modules/context";
import {auth$} from "./context";
import firebase from "./firebase";
import logo from "./login-anim-1.png";
import "./login-anim";

import cs from "./login.module.scss";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isNameFormVisible, showNameForm] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  async function checkEmailAvailability(evt: React.FormEvent) {
    evt.preventDefault();
    if (isLoading) return;
    setError(undefined);
    setLoading(true);

    try {
      await firebase.signInWithEmailAndPassword(email, "password");
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          showNameForm(true);
          break;
        default:
          setError(err.message);
          showNameForm(false);
      }
    }

    setLoading(false);
  }

  async function createAccount(evt: React.FormEvent) {
    evt.preventDefault();
    if (isLoading) return;
    setError(undefined);
    setLoading(true);

    try {
      const {user} = await firebase.createUserWithEmailAndPassword(email, "password");
      if (!user) throw new Error("auth/user-creation-failed");
      await user.updateProfile({displayName: name, photoURL: encodeStep(initialStep)});
      auth$.next({type: "authenticated", email, name, lastStep: initialStep});
    } catch (err) {
      setError(err.message);
      showNameForm(false);
    }

    setLoading(false);
  }

  return (
    <>
      <Animation name="ANIMHOME" composition="734EB31CE8A9084FB0FF77AFEBD5E96A" fullscreen>
        <div className={cs.container}>
          <div className={cs.label}>
            Saisissez votre e-mail. Il vous servira <br />
            d'identifiant tout au long du parcours.
          </div>
          <div className={cs.forms}>
            <form className={cs.form} onSubmit={checkEmailAvailability}>
              <input
                className={cs.input}
                autoFocus
                type="email"
                placeholder="mon email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                disabled={isLoading || isNameFormVisible}
                required
              />
              <button className={cs.submit} type="submit" disabled={isLoading || isNameFormVisible}>
                OK
              </button>
            </form>
            {isNameFormVisible && (
              <>
                <br />
                <form className={cs.form} onSubmit={createAccount}>
                  <input
                    className={cs.input}
                    autoFocus
                    type="text"
                    placeholder="mon nom"
                    value={name}
                    onChange={(evt) => setName(evt.target.value)}
                    disabled={isLoading}
                  />
                  <button className={cs.submit} type="submit" disabled={isLoading}>
                    OK
                  </button>
                </form>
              </>
            )}
          </div>
          {error && <span className={cs.error}>{error}</span>}
        </div>
      </Animation>
      <img className={cs.logo} src={logo} alt="" />
    </>
  );
};

export default Login;
