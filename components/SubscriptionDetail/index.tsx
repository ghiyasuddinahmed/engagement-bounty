import React from 'react'
import { Button } from '@/components/ui/button'
interface SubscriptionDetailsProps {
  onCreateClick: () => void
}
export function SubscriptionDetails({
  onCreateClick,
}: SubscriptionDetailsProps) {
  return (
    <div>
      <h3 className="text-sm font-medium mb-4">Subscription Details</h3>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium">Subscription 01</span>
          <span className="text-sm text-gray-600 ml-1">Ends Aug 31, 2023</span>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-10">
          <div>
            <p className="text-xs text-gray-500 uppercase">Available</p>
            <p className="font-medium text-green-600">8,000 SAR</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Consumed</p>
            <p className="font-medium">400 SAR</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Total Balance</p>
            <p className="font-medium">1,200 SAR</p>
          </div>
          <Button
            variant="default"
            onClick={onCreateClick}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Create Program
          </Button>
        </div>
      </div>
    </div>
  )
}
