'use client'

import {
  ArrowPathIcon,
  BarsArrowDownIcon,
  ChevronLeftIcon,
  FunnelIcon,
  HomeIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

import MobileControllerButton from '@/components/common/controller/mobile/ControllerButton'
import MobileControllerWrapper from '@/components/common/controller/mobile/ControllerWrapper'
import { useIsPcStore } from '@/store/common/isPcStore'

export default function CompanyController() {
  const isPc = useIsPcStore((state) => state.isPc)

  if (isPc) {
    return (
      <div>
        <h1>PcCompanyController</h1>
      </div>
    )
  }

  return (
    <MobileControllerWrapper>
      <MobileControllerButton
        icon={ArrowPathIcon}
        handleClick={() => console.log('reload')}
      />
      <MobileControllerButton
        icon={BarsArrowDownIcon}
        handleClick={() => console.log('sort')}
      />
      <MobileControllerButton
        icon={FunnelIcon}
        handleClick={() => console.log('filter')}
      />
      <MobileControllerButton
        icon={PlusIcon}
        handleClick={() => console.log('add company')}
        primary={true}
      />
    </MobileControllerWrapper>
  )
}