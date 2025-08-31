import React from 'react'
import { Badge } from '@/components/ui/badge'
import { MoreVertical } from 'lucide-react'
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
interface ProgramsTableProps {
  programs: Program[]
}
export function ProgramsTable({ programs }: ProgramsTableProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Program
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Asset Identifier
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bounty Eligibility
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program) =>
              program.assets.map((asset) => (
                <tr
                  key={`${program.id}-${asset.id}`}
                  className="border-b last:border-0"
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm font-medium text-purple-600">
                      {program.name}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {program.startDate}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm text-purple-600">
                      {asset.identifier}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {asset.description}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <Badge
                      variant={
                        asset.bountyEligibility === 'ELIGIBLE'
                          ? 'success'
                          : 'error'
                      }
                    >
                      {asset.bountyEligibility === 'ELIGIBLE'
                        ? 'Eligible'
                        : 'Ineligible'}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
