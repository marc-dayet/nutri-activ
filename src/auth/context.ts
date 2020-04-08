import {BehaviorSubject} from "rxjs"

import {Step} from "../modules/context"

type AuthState = NonInitialized | NonAuthenticated | Authenticated

type NonInitialized = {
  type: "not-initialized"
}

type NonAuthenticated = {
  type: "not-authenticated"
}

type Authenticated = {
  type: "authenticated"
  email: string
  name: string
  lastStep: Step
}

export const auth$ = new BehaviorSubject<AuthState>({type: "not-initialized"})
