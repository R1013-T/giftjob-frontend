'use client'

import { useMutation } from '@apollo/client'
import { useSession } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import type { SessionUser } from '@/types/session'
import { CREATE_COMPANY } from '@/utils/graph/mutations'

export default function CrudTest() {
  const { data: session, status }: any = useSession()
  const sessionUser = session?.sessionUser as SessionUser
  const [createCompany, { data, loading, error }] = useMutation(CREATE_COMPANY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :{error.message}</p>

  const handleCreate = async () => {
    console.log('create')
    await createCompany({
      variables: {
        input: {
          name: 'test company 1',
          tell: 'test tell 1',
          email: 'company1@test.com',
          address: 'test address 1',
          site_url: 'test site url 1',
          industry: 'test industry 1',
          employees_number: 30,
          is_pinned: false,
          pinned_at: '',
          is_trash: false,
          user_id: sessionUser?.id,
        },
      },
    }).then((res) => {
      console.log('res: ', res)
    })
  }

  return (
    <div>
      <p>crud test</p>
      <Button onClick={handleCreate}>Create Company</Button>
    </div>
  )
}
