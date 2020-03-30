import React, {FC, useState} from "react"

import {encodeModuleKey} from "../modules/context"
import {auth$} from "./context"
import firebase from "./firebase"

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
    const lastStep: [number, number, number] = [0, 1, 1]
    await user.updateProfile({displayName: name, photoURL: encodeModuleKey(...lastStep)})
    auth$.next({type: "authenticated", email, name, lastStep})
  }

  return (
    <>
      <form className={cs.form} onSubmit={checkEmailAvailability}>
        <input
          autoFocus
          type="text"
          placeholder="Email"
          value={email}
          onChange={evt => setEmail(evt.target.value)}
        />
        <button type="submit">LOGIN</button>
      </form>
      {isNameFormVisible && (
        <form className={cs.form} onSubmit={createAccount}>
          <input
            autoFocus
            type="text"
            placeholder="Nom"
            value={name}
            onChange={evt => setName(evt.target.value)}
          />
          <button type="submit">LOGIN</button>
        </form>
      )}
    </>
  )
}

export default Login
