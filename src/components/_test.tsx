'use client'

import { Button } from './ui/button'

export default function Test() {
  return (
    <div>
      <Button
        onClick={async () => {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_AI_ENDPOINT}/mock-interview?occupation='エンジニア'`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  user: ['user1', 'user2'],
                  question: ['question1', 'question2', 'question3'],
                }),
              }
            )
            const data = await res.json()

            console.log('data', data)
          } catch (error) {
            console.log('error', error)
          }
        }}
      >
        test mock interview
      </Button>
    </div>
  )
}
