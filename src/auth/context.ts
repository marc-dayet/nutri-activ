import {BehaviorSubject} from "rxjs"

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
  lastStep: [number, number, number]
}

export const auth$ = new BehaviorSubject<AuthState>({type: "not-initialized"})
