import React, {FC, useState} from "react"

import Animation from "../animation"
import {encodeStep, initialStep} from "../modules/context"
import {auth$} from "./context"
import firebase from "./firebase"
import "./login-anim"

import cs from "./login.module.scss"

const Login: FC = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isNameFormVisible, showNameForm] = useState(false)

  async function checkEmailAvailability(evt: React.FormEvent) {
    evt.preventDefault()

    try {
      await firebase.signInWithEmailAndPassword(email, "password")
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          showNameForm(true)
          break
        default:
          throw err
      }
    }
  }

  async function createAccount(evt: React.FormEvent) {
    evt.preventDefault()
    const {user} = await firebase.createUserWithEmailAndPassword(email, "password")
    if (!user) throw new Error("auth/user-creation-failed")
    await user.updateProfile({displayName: name, photoURL: encodeStep(initialStep)})
    auth$.next({type: "authenticated", email, name, lastStep: initialStep})
  }

  return (
    <>
      <Animation name="home1" composition="734EB31CE8A9084FB0FF77AFEBD5E96A" />
      <div className={cs.container}>
        <div className={cs.forms}>
          <form className={cs.form} onSubmit={checkEmailAvailability}>
            <input
              className={cs.input}
              autoFocus
              type="text"
              placeholder="Mon email"
              value={email}
              onChange={evt => setEmail(evt.target.value)}
            />
            <button className={cs.submit} type="submit">
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
                  placeholder="Mon nom"
                  value={name}
                  onChange={evt => setName(evt.target.value)}
                />
                <button className={cs.submit} type="submit">
                  OK
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Login
