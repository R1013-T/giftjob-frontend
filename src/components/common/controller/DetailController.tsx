'use client'

import {
  ArrowPathIcon,
  BarsArrowDownIcon,
  FunnelIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

import MobileControllerButton from '@/components/common/controller/mobile/ControllerButton'
import MobileControllerWrapper from '@/components/common/controller/mobile/ControllerWrapper'
import PcControllerWrapper from '@/components/common/controller/pc/ContollerWrapper'
import PcControllerButton from '@/components/common/controller/pc/ControllerButton'
import { useIsPcStore } from '@/store/common/isPcStore'
import type { ControllerButton } from '@/types/controller'
import capitalizeFirstLetter from '@/utils/common/capitalizeFirstLetter'

export default function DetailController() {
  const pathname = usePathname()
  const currentPage = pathname.split('/')[2]

  console.log(currentPage)

  const isPc = useIsPcStore((state) => state.isPc)

  const buttonConfigs: ControllerButton[] = [
    {
      name: 'Reload',
      icon: ArrowPathIcon,
      action: () => console.log(`${currentPage} reload`),
    },
    {
      name: 'Sort',
      icon: BarsArrowDownIcon,
      action: () => console.log(`${currentPage} sort`),
    },
    {
      name: 'Filter',
      icon: FunnelIcon,
      action: () => console.log(`${currentPage} filter`),
    },
    {
      name: `Add ${capitalizeFirstLetter(currentPage)}`,
      icon: PlusIcon,
      action: () => console.log(`add ${currentPage}`),
      primary: true,
    },
  ]

  if (isPc)
    return (
      <PcControllerWrapper>
        {buttonConfigs.map((config, index) => (
          <PcControllerButton
            key={index}
            name={config.name}
            icon={config.icon}
            handleClick={config.action}
            primary={config.primary}
          />
        ))}
      </PcControllerWrapper>
    )

  return (
    <MobileControllerWrapper>
      {buttonConfigs.map((config, index) => (
        <MobileControllerButton
          key={index}
          icon={config.icon}
          handleClick={config.action}
          primary={config.primary}
        />
      ))}
    </MobileControllerWrapper>
  )
}
