import { nextResponse } from "next/server"



export const middleware = (request) => {

  // for all page other then /auth/* check if person is authenticated if not redirect to /auth/login


  // if someone goes to otp page without having a valid otp token redirect to /auth/login or else make otp a component.


  // for all page of type /auth/* check if person is authenticated if yes recirect to /dashboard
}

