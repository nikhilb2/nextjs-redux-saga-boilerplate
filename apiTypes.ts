export type User = {
    _id: string
    email: string
    firstname: string
    lastname: string
    username: string
    created_at: string
    updated_at: string
    score?: number
    profilePic?: string
    notifications?: string
    followers?: number
    following?: number
    reviews: number
    favorites?: number
    follow?: boolean
    bookmarks?: number
  }

  // signin
export type SignInVariables = {
  email: string
  password: string
}


export type SuccessResult = {
  success: true
}

export type SignInResult = {
  success: true
  token: string
  user: User
}
