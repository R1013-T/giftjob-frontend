'use client'

import {
  ArrowPathIcon,
  ArrowUturnLeftIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { usePathname, useRouter } from 'next/navigation'

import MobileControllerButton from '@/components/common/controller/mobile/ControllerButton'
import MobileControllerWrapper from '@/components/common/controller/mobile/ControllerWrapper'
import PcControllerWrapper from '@/components/common/controller/pc/ContollerWrapper'
import PcControllerButton from '@/components/common/controller/pc/ControllerButton'
import type { ControllerButton } from '@/types/controller'

export default function DetailController() {
  const pathname = usePathname()
  const router = useRouter()

  const buttonConfigs: ControllerButton[] = [
    {
      name: 'Trash',
      icon: TrashIcon,
      action: () => router.push(`${pathname}?modal=trash`),
      alert: true,
    },
    {
      name: 'Back to List',
      icon: ArrowUturnLeftIcon,
      action: () => router.push(`/main/${pathname.split('/')[2]}`),
    },
    {
      name: 'Reload',
      icon: ArrowPathIcon,
      action: () => router.refresh(),
    },
    {
      name: 'Edit',
      icon: PencilSquareIcon,
      action: () => router.push(`${pathname}?modal=edit`),
      primary: true,
    },
  ]

  return (
    <>
      <PcControllerWrapper>
        {buttonConfigs.map((config, index) => (
          <PcControllerButton
            key={index}
            name={config.name}
            icon={config.icon}
            handleClick={config.action}
            primary={config.primary}
            alert={config.alert}
          />
        ))}
      </PcControllerWrapper>
      <MobileControllerWrapper>
        {buttonConfigs.map((config, index) => (
          <MobileControllerButton
            key={index}
            icon={config.icon}
            handleClick={config.action}
            primary={config.primary}
            alert={config.alert}
          />
        ))}
      </MobileControllerWrapper>
    </>
  )
}
