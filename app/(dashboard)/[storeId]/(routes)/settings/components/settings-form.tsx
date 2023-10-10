'use client'

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Store } from '@prisma/client'
import { Trash2 } from 'lucide-react'

interface SettingsFormProps {
  initialData: Store
}
export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title='Settings' description='Manage your store preferences' />
        <Button variant='destructive' size='icon' onClick={() => {}}>
          <Trash2 className='w-4 h-4' />
        </Button>
      </div>
    </>
  )
}
