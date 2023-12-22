export type MockInterviewMessage = {
  role: string
  content: string
}

export type MockInterviewResponse = {
  greeting?: string
  questions?: string
  advice?: string
  score?: number
}