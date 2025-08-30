'use client'
import React, { useState } from 'react'
import { SubscriptionDetails } from '@/components/SubscriptionDetail'
import { ProgramsTable } from '@/components/ProgramTable'
import { CreateProgramModal } from '@/components/ProgramModal'
interface Asset {
  id: string
  type: 'WEB' | 'MOBILE'
  identifier: string
  description: string
  bountyEligibility: 'ELIGIBLE' | 'INELIGIBLE'
}
interface Program {
  id: string
  name: string
  startDate: string
  assets: Asset[]
}
export default function ProgramsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [programs, setPrograms] = useState<Program[]>([
    {
      id: '1',
      name: 'Web AI Pentest - B2 team',
      startDate: 'Nov04, 2023',
      assets: [
        {
          id: '1',
          type: 'WEB',
          identifier: 'Trustline.sa',
          description: 'Complete Form',
          bountyEligibility: 'ELIGIBLE',
        },
      ],
    },
    {
      id: '2',
      name: 'Web AI Pentest - B2 team',
      startDate: 'Nov04, 2023',
      assets: [
        {
          id: '2',
          type: 'WEB',
          identifier: 'Trustline.sa',
          description: 'Under Review',
          bountyEligibility: 'INELIGIBLE',
        },
      ],
    },
    {
      id: '3',
      name: 'Web AI Pentest - B2 team',
      startDate: 'Nov04, 2023',
      assets: [
        {
          id: '3',
          type: 'WEB',
          identifier: 'Trustline.sa',
          description: '5 open Findings',
          bountyEligibility: 'ELIGIBLE',
        },
      ],
    },
    {
      id: '4',
      name: 'Web AI Pentest - B2 team',
      startDate: 'Nov04, 2023',
      assets: [
        {
          id: '4',
          type: 'WEB',
          identifier: 'Trustline.sa',
          description: '7x Resolved Reports',
          bountyEligibility: 'INELIGIBLE',
        },
      ],
    },
    {
      id: '5',
      name: 'Web AI Pentest - B2 team',
      startDate: 'Nov04, 2023',
      assets: [
        {
          id: '5',
          type: 'WEB',
          identifier: 'Trustline.sa',
          description: '11 Resolved Reports',
          bountyEligibility: 'ELIGIBLE',
        },
      ],
    },
    {
      id: '6',
      name: 'Web AI Pentest - B2 team',
      startDate: 'Nov04, 2023',
      assets: [
        {
          id: '6',
          type: 'WEB',
          identifier: 'Trustline.sa',
          description: '11 Resolved Reports',
          bountyEligibility: 'INELIGIBLE',
        },
      ],
    },
  ])
  const handleCreateProgram = (programData: {
    name: string
    startDate: string
    website?: string
    twitter?: string
    assets: Asset[]
  }) => {
    // Format date to match existing format
    const dateParts = programData.startDate.split('/')
    const month = parseInt(dateParts[1])
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    const formattedDate = `${monthNames[month - 1]}${dateParts[0]}, ${dateParts[2]}`
    const newProgram: Program = {
      id: (programs.length + 1).toString(),
      name: programData.name,
      startDate: formattedDate,
      assets: programData.assets,
    }
    setPrograms([...programs, newProgram])
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Programs</h1>
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <SubscriptionDetails
            onCreateClick={() => setIsCreateModalOpen(true)}
          />
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">All programs</h2>
          <ProgramsTable programs={programs} />
        </div>
        <CreateProgramModal
          isOpen={isCreateModalOpen}
          onOpenChange={setIsCreateModalOpen}
          onSubmit={handleCreateProgram}
        />
      </div>
    </div>
  )
}
